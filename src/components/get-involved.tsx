import { Button } from "@/components/ui/button"

export function GetInvolved() {
  return (
    <section id="get-involved" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Get Involved
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Project Banyan is just getting started. Whether you're a patient,
          carer, clinician, researcher, or simply someone who cares — there's
          a place for you here.
        </p>
        <div className="mt-10 bg-muted rounded-2xl p-8 md:p-12">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Stay in the loop
          </h3>
          <p className="text-muted-foreground mb-6">
            We're building something meaningful. Leave your email and we'll
            share updates as we grow.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-lg border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            <Button type="submit">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            No spam. Just meaningful updates about our progress.
          </p>
        </div>
      </div>
    </section>
  )
}
