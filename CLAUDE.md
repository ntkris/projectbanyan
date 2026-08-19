# Project Banyan

Read this before writing any copy or building any UI. These rules are not
style preferences. They come from who reads this site.

## Who reads this

People living with Parkinson's, the families and carers who look after them,
the doctors who treat them, and the scientists researching it.

Many readers have tremor, stiffness, and slower movement. Many have trouble
with fine motor control, so pointing and clicking is hard. Parkinson's also
reduces contrast sensitivity, weakens eye convergence, and makes eye
movements undershoot, so reading is tiring and easy to lose your place in.
Attention and planning are often affected too.

Every rule below follows from one of those facts.

## Writing rules

These apply to everything a reader sees: page copy, headings, buttons, links,
labels, alt text, error messages, emails and social posts.

1. **Never use em dashes or en dashes.** Use a full stop, a comma, or split
   the sentence in two. They make a sentence harder to follow, and screen
   readers treat them inconsistently. This is checked automatically.
2. **One idea per sentence.** Aim for 15 words or fewer. If a sentence needs
   a comma to hold two ideas together, it is probably two sentences.
3. **Use the common word.** Write "help" not "facilitate", "doctor" not
   "clinician", "use" not "utilise", "about" not "regarding", "start" not
   "commence". If a shorter word means the same thing, use it.
4. **Say who does what.** Active voice. "We explain what a diagnosis means",
   not "an explanation of the diagnosis is provided".
5. **Put the point first.** The first sentence should carry the meaning on its
   own. Do not build up to it.
6. **Sentence case** for headings, buttons and navigation. Title Case is
   slower to read.
7. **No jargon without a plain explanation.** If a medical term is genuinely
   needed, say what it means the first time it appears.
8. **No semicolons, and no brackets in the middle of a sentence.** Both are
   signs that a sentence is carrying too much.
9. **Write to the reader.** Say "you", not "the patient".
10. **Never rewrite a quotation.** The poem in `src/components/poem.tsx` is
    Dr Nandakumar Jairam's own writing. It stays exactly as he wrote it,
    including its spacing and punctuation.

Run `npm run check:copy` to check what a machine can check. It fails on dash
punctuation and flags long sentences and long words for you to look at.

## Design floors

Do not go below any of these. They are documented with the measured contrast
ratios in `README.md`, and the tokens live in `src/index.css`.

| | Floor |
| --- | --- |
| Body text | 19px at 1.7 line height (`text-body`) |
| Contrast | 7:1, which is WCAG AAA |
| Line length | 62 characters (`max-w-measure`) |
| Font weight | 400 minimum, never lighter |
| Targets | 44px minimum, 48px by default |
| Focus | 3px outline, never suppressed |
| Colour | never the only thing carrying meaning |

Other rules that follow from the same reasoning:

- No hover-only behaviour. Anything a reader needs must be visible without a
  pointer resting on it.
- No time limits, no auto-advancing content, no motion that cannot be stopped.
- Build sections with `Section`, `SectionHeading` and `Prose` from
  `src/components/section.tsx`, so width and rhythm stay consistent.
- Prefer a rule to a box. This design uses lines and space to separate things,
  not cards and shadows.

## Before committing

```bash
npm run lint     # eslint plus the copy check
npm run build    # type-check and build
```
