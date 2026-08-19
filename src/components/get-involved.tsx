import { Prose, Section, SectionHeading } from "@/components/section"

export function GetInvolved() {
  return (
    <Section id="get-involved">
      <SectionHeading label="Get involved">
        There is a place for you here
      </SectionHeading>

      <Prose className="mt-10">
        <p className="text-muted-foreground">
          Project Banyan is just getting started. Maybe you have Parkinson's.
          Maybe you care for someone who does. Maybe you are a doctor or a
          scientist. Maybe you just want to help.
        </p>
        <p className="mt-5 text-muted-foreground">
          There is a place for you here.
        </p>
      </Prose>
    </Section>
  )
}
