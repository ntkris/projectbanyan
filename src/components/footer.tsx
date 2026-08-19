import { BanyanMark } from "@/components/banyan-mark"

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#who-we-support", label: "Who we help" },
  { href: "#get-involved", label: "Get involved" },
]

export function Footer() {
  return (
    <footer className="border-t border-foreground bg-accent">
      <div className="mx-auto max-w-page px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <BanyanMark className="h-8 w-8 text-primary" />
              <p className="font-serif text-h3 font-semibold tracking-tight">
                Project Banyan
              </p>
            </div>
            <p className="mt-3 max-w-measure text-small text-muted-foreground">
              Clear information for people living with Parkinson's.
            </p>
          </div>
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex h-12 items-center text-small text-foreground no-underline underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-12 max-w-measure border-t border-border pt-8 text-small text-muted-foreground">
          &copy; {new Date().getFullYear()} Project Banyan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
