import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-page px-6">
        <p className="text-label uppercase text-primary">
          For people living with Parkinson's
        </p>
        <h1 className="mt-5 max-w-[19ch] text-h1 font-semibold tracking-tight">
          Clear answers about Parkinson's
        </h1>
        <div className="mt-7 max-w-measure text-lede text-muted-foreground">
          <p>
            We help people living with Parkinson's and the people who care for
            them. We also work with doctors and scientists.
          </p>
          <p className="mt-5">
            We start by making information clear and easy to find.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" render={<a href="#get-involved" />}>
            Get involved
          </Button>
          <Button size="lg" variant="outline" render={<a href="#mission" />}>
            Read our mission
          </Button>
        </div>
      </div>
    </section>
  )
}
