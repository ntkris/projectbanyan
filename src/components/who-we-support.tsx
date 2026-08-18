import { Section, SectionHeading } from "@/components/section"

const groups = [
  {
    title: "Patients",
    description:
      "People living with Parkinson's deserve clear, honest information about their condition — from the earliest signs through to managing an ordinary day.",
  },
  {
    title: "Carers",
    description:
      "The people who show up every day: family, friends, caregivers. We help them understand what is happening now and prepare for what comes next.",
  },
  {
    title: "Doctors",
    description:
      "Clinicians on the front line of care. We build resources that help them explain complex information to patients and their families.",
  },
  {
    title: "Researchers",
    description:
      "The scientists working to understand and treat Parkinson's. We help make their work visible and their findings legible outside the field.",
  },
]

export function WhoWeSupport() {
  return (
    <Section id="who-we-support">
      <SectionHeading label="Who we support">
        Four groups, one condition
      </SectionHeading>

      <p className="mt-10 max-w-measure text-muted-foreground">
        Parkinson's touches many lives. Our work reaches across the whole
        ecosystem of care, not only the person holding the diagnosis.
      </p>

      <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {groups.map((group) => (
          <article key={group.title} className="border-t border-foreground pt-5">
            <h3 className="text-h3 font-semibold">{group.title}</h3>
            <p className="mt-2.5 text-muted-foreground">{group.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
