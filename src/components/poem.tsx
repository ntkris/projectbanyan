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
    <section id="in-their-words" className="py-24 bg-accent/40">
      <figure className="max-w-2xl mx-auto px-6">
        <div className="text-center">
          <p className="text-sm font-medium text-primary tracking-wide uppercase">
            In their own words
          </p>
          <div className="mt-4 h-1 w-16 bg-primary rounded-full mx-auto" />
        </div>
        <blockquote className="mt-10 space-y-6 text-left sm:text-center">
          {stanzas.map((stanza) => (
            <p key={stanza[0]} className="text-lg md:text-xl text-foreground/90 italic">
              {stanza.map((line) => (
                // Hanging indent so a line that wraps still reads as one line of verse.
                <span key={line} className="block leading-loose pl-6 -indent-6 sm:pl-0 sm:indent-0">
                  {line}
                </span>
              ))}
            </p>
          ))}
        </blockquote>
        <figcaption className="mt-10 text-sm text-muted-foreground text-left sm:text-center">
          — Written by a friend of Project Banyan living with Parkinson's
        </figcaption>
      </figure>
    </section>
  )
}
