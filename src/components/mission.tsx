import { Prose, Section, SectionHeading } from "@/components/section"

const drivers = [
  {
    title: "Information you can trust",
    body: "We explain what a diagnosis means in plain words. It is free to read, and you do not need a medical background to follow it.",
  },
  {
    title: "Help for families too",
    body: "Parkinson's changes life for the whole family. We help carers understand what is happening now, and what may come next.",
  },
  {
    title: "People who understand",
    body: "Most of what helps day to day was worked out by someone else first. We connect people so nobody has to start from scratch.",
  },
  {
    title: "Research made clear",
    body: "Important research often stays locked inside journals. We explain the work that could change how people are treated.",
  },
]

export function Mission() {
  return (
    <Section id="mission">
      <SectionHeading label="Our mission">
        We make Parkinson's easier to understand
      </SectionHeading>

      <Prose className="mt-10">
        <p className="text-muted-foreground">
          Parkinson's affects millions of people around the world. It affects
          their families too. Daily routines change. New questions come up all
          the time.
        </p>
        <p className="mt-5 text-muted-foreground">
          Many people live with Parkinson's for years without a clear
          explanation of it. We want to change that. When you understand what
          is happening, it is easier to make good choices about your care.
        </p>
      </Prose>

      <dl className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {drivers.map((driver) => (
          <div key={driver.title} className="border-t border-foreground pt-5">
            <dt className="font-serif text-h3 font-semibold">{driver.title}</dt>
            <dd className="mt-2.5 text-muted-foreground">{driver.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
