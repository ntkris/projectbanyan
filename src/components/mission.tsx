export function Mission() {
  return (
    <section id="mission" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Our Mission
          </h2>
          <div className="mt-4 h-1 w-16 bg-primary rounded-full mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Parkinson's disease affects millions worldwide — not just those
              diagnosed, but everyone around them. Families adapt. Routines
              change. Questions multiply.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Project Banyan exists to bridge the gap between what people
              experience and what they understand. We believe that better
              knowledge leads to better decisions, better care, and better lives.
            </p>
          </div>
          <div className="bg-muted rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              What drives us
            </h3>
            <ul className="space-y-4">
              {[
                "Making credible information accessible to everyone",
                "Supporting the people behind the diagnosis",
                "Connecting communities that share this journey",
                "Amplifying research that moves the needle",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
