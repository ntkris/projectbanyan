#!/usr/bin/env node
/**
 * Checks the writing rules in CLAUDE.md that a machine can check.
 *
 * Hard failures: em dashes and other dash punctuation anywhere. They make a
 * sentence harder to parse, and screen readers handle them inconsistently.
 *
 * Reported but not failed: long sentences and long words in reader-facing
 * copy. Those need judgement, so the check surfaces them rather than blocking.
 *
 * Run with `npm run check:copy`. Also runs as part of `npm run lint`.
 */
import { readFileSync } from "node:fs"
import { globSync } from "node:fs"

const DASHES = {
  "—": "em dash",
  "–": "en dash",
  "‒": "figure dash",
  "―": "horizontal bar",
}

const SCANNED = ["src/**/*.{ts,tsx,css}", "index.html", "README.md", "CLAUDE.md"]
const COPY_FILES = "src/components/*.tsx"

/** The poem is a direct quotation and is never rewritten. */
const VERBATIM = ["src/components/poem.tsx"]

const MAX_SENTENCE_WORDS = 25
const LONG_WORD_LETTERS = 13

const files = SCANNED.flatMap((pattern) =>
  globSync(pattern, { exclude: (p) => p.includes("node_modules") })
)

let failures = 0

for (const file of files) {
  const text = readFileSync(file, "utf8")
  text.split("\n").forEach((line, i) => {
    for (const [char, name] of Object.entries(DASHES)) {
      if (line.includes(char)) {
        console.error(
          `${file}:${i + 1}  ${name} found. Use a full stop, a comma, or rewrite as two sentences.`
        )
        console.error(`    ${line.trim()}`)
        failures += 1
      }
    }
  })
}

/** Pull the prose a reader actually sees out of a component. */
function readerFacingText(source) {
  return (
    source
      // drop imports, class names and other machinery before looking for copy
      .replace(/^import[^\n]*$/gm, "")
      .replace(/className=(?:"[^"]*"|\{[^}]*\})/g, "")
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\/\/[^\n]*/g, "")
      // JSX text nodes, and quoted copy strings that stay inside one attribute
      .match(/>[^<>{}]+<|"[^"<>{}\n]{12,}"/g) ?? []
  )
    .map((chunk) => chunk.replace(/^[>"]|[<"]$/g, "").trim())
    .filter((chunk) => /[a-z]{3}\s+[a-z]/i.test(chunk))
}

const copyFiles = globSync(COPY_FILES).filter((f) => !VERBATIM.includes(f))
const notes = []
let sentences = 0
let words = 0

for (const file of copyFiles) {
  for (const chunk of readerFacingText(readFileSync(file, "utf8"))) {
    for (const sentence of chunk.split(/(?<=[.!?])\s+/)) {
      const list = sentence.trim().split(/\s+/).filter(Boolean)
      if (list.length === 0) continue
      sentences += 1
      words += list.length
      if (list.length > MAX_SENTENCE_WORDS) {
        notes.push(`${file}  ${list.length}-word sentence: "${sentence.trim()}"`)
      }
      for (const word of list) {
        const letters = word.replace(/[^A-Za-z]/g, "")
        if (letters.length >= LONG_WORD_LETTERS) {
          notes.push(`${file}  long word "${letters}". Is there a shorter one?`)
        }
      }
    }
  }
}

if (notes.length) {
  console.warn("\nWorth a second look (not failures):")
  for (const note of [...new Set(notes)]) console.warn(`  ${note}`)
}

if (sentences) {
  console.log(
    `\nReader-facing copy: ${sentences} sentences, ${(words / sentences).toFixed(1)} words per sentence on average.`
  )
}

if (failures) {
  console.error(`\n${failures} dash problem(s) found. See CLAUDE.md.`)
  process.exit(1)
}
console.log("Copy check passed.")
