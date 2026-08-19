import { Prose, Section, SectionHeading } from "@/components/section"
import { Button } from "@/components/ui/button"

const EMAIL = "contact@projectbanyan.org"

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
          Write to us and tell us what you would like to do. We read every
          message.
        </p>
      </Prose>

      <div className="mt-10">
        <Button size="lg" render={<a href={`mailto:${EMAIL}`} />}>
          Email us
        </Button>
        {/* The address is spelled out as well, so it can still be read, copied
            or written down on a device with no mail app set up. */}
        <p className="mt-5 text-small text-muted-foreground">
          Our address is <span className="text-foreground">{EMAIL}</span>
        </p>
      </div>
    </Section>
  )
}
