import { Prose, Section, SectionHeading } from "@/components/section"

export function GetInvolved() {
  return (
    <Section id="get-involved">
      <SectionHeading label="Get involved">
        There is a place for you here
      </SectionHeading>

      <Prose className="mt-10">
        <p className="text-muted-foreground">
          Project Banyan is just getting started. Whether you are a patient, a
          carer, a clinician, a researcher, or simply someone who cares — there
          is a place for you here.
        </p>
      </Prose>
    </Section>
  )
}
