import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-page px-6">
        <p className="text-label uppercase text-primary">A Parkinson's Initiative</p>
        <h1 className="mt-5 max-w-[19ch] text-h1 font-semibold tracking-tight">
          Understanding is where better care begins
        </h1>
        <p className="mt-7 max-w-measure text-lede text-muted-foreground">
          Project Banyan supports patients, carers, doctors and researchers. We
          start with knowledge and awareness, because understanding is the first
          step toward change.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" render={<a href="#get-involved" />}>
            Get Involved
          </Button>
          <Button size="lg" variant="outline" render={<a href="#mission" />}>
            Read the Mission
          </Button>
        </div>
      </div>
    </section>
  )
}
