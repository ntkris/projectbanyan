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
            <p key={stanza[0]} className="font-serif text-lede">
              {stanza.map((line) => (
                // Hanging indent so a line that wraps still reads as one line of verse.
                <span key={line} className="block pl-7 -indent-7 leading-relaxed">
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
