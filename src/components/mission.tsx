import { Prose, Section, SectionHeading } from "@/components/section"

const drivers = [
  {
    title: "Credible information, freely available",
    body: "What a diagnosis actually means, written to be understood rather than to be correct in front of other clinicians.",
  },
  {
    title: "The people behind the diagnosis",
    body: "Parkinson's is lived by families, not only by patients. Carers need to know what is happening and what comes next.",
  },
  {
    title: "Communities that share the journey",
    body: "Most of what helps day to day was learned by someone else first. Connecting people shortens that road.",
  },
  {
    title: "Research that moves the needle",
    body: "Work that changes care deserves to be visible outside the journals it was published in.",
  },
]

export function Mission() {
  return (
    <Section id="mission">
      <SectionHeading label="Our mission">
        Bridging what people live and what they understand
      </SectionHeading>

      <Prose className="mt-10">
        <p className="text-muted-foreground">
          Parkinson's disease affects millions worldwide — not just those
          diagnosed, but everyone around them. Families adapt. Routines change.
          Questions multiply.
        </p>
        <p className="mt-5 text-muted-foreground">
          Project Banyan exists to close the gap between what people experience
          and what they understand. Better knowledge leads to better decisions,
          better care, and better lives.
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
