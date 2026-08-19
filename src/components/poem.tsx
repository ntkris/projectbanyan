import { Section } from "@/components/section"

const stanzas = [
  [
    "I boarded this flight some years ago.",
    "I have no idea how far and difficult it will be",
  ],
  [
    "The darkness surrounds and the path keeps offering",
    "different routes and hope that drives me to keep moving",
    "I am overtaken by flights with older passengers who can move faster and easier than I",
    "I ask myself - why?",
    "I will never know",
    "It is for me to smile and move on!",
  ],
]

export function Poem() {
  return (
    <Section id="in-his-words" tone="band">
      <figure className="max-w-measure">
        <p className="text-label uppercase text-muted-foreground">
          In his own words
        </p>
        <blockquote className="mt-8 space-y-7">
          {stanzas.map((stanza) => (
            <p key={stanza[0]} className="font-serif text-body sm:text-lede">
              {stanza.map((line) => (
                // A hanging indent, so a line too long for the column still
                // reads as one line of verse. Deliberately not text-balance:
                // balancing breaks a line mid-phrase, which makes the browser's
                // break look chosen. In a poem the line breaks are the author's,
                // and a reader has to be able to tell his from the screen's.
                <span key={line} className="block pl-5 -indent-5 leading-relaxed sm:pl-7 sm:-indent-7">
                  {line}
                </span>
              ))}
            </p>
          ))}
        </blockquote>
        <figcaption className="mt-9 border-t border-foreground pt-5">
          <span className="font-serif text-h3 font-semibold">
            Dr Nandakumar Jairam
          </span>
          <span className="mt-1 block text-small text-muted-foreground">
            Living with Parkinson's
          </span>
        </figcaption>
      </figure>
    </Section>
  )
}
