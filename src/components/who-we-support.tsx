import { Section, SectionHeading } from "@/components/section"

const groups = [
  {
    title: "People with Parkinson's",
    description:
      "You deserve clear, honest information about your own condition. We cover the first signs, the treatments, and how to get through an ordinary day.",
  },
  {
    title: "Carers and families",
    description:
      "Family, friends and carers show up every day. We help you understand what is happening now, and get ready for what comes next.",
  },
  {
    title: "Doctors",
    description:
      "Doctors have very little time with each patient. We build clear resources they can share with patients and families.",
  },
  {
    title: "Researchers",
    description:
      "Scientists are working to understand and treat Parkinson's. We help share what they find, in words everyone can follow.",
  },
]

export function WhoWeSupport() {
  return (
    <Section id="who-we-support">
      <SectionHeading label="Who we help">
        Four groups, one condition
      </SectionHeading>

      <p className="mt-10 max-w-measure text-muted-foreground">
        Parkinson's affects many people, not only the person who has it. We
        work with all of them.
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
