import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-background" />
      <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
          A Parkinson's Initiative
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Creating impact for people{" "}
          <span className="text-primary">living with Parkinson's</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Project Banyan supports patients, carers, doctors, and researchers.
          We start with knowledge and awareness — because understanding is the
          first step toward change.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" render={<a href="#get-involved" />}>
            Get Involved
          </Button>
          <Button size="lg" variant="outline" render={<a href="#mission" />}>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
