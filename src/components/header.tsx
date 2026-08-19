import { BanyanMark } from "@/components/banyan-mark"
import { Button } from "@/components/ui/button"

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#who-we-support", label: "Who we help" },
  { href: "#get-involved", label: "Get involved" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground bg-background">
      <div className="mx-auto flex h-20 max-w-page items-center gap-3 px-6 sm:gap-8">
        <a
          href="/"
          className="mr-auto flex h-12 items-center gap-2.5 text-foreground no-underline"
        >
          <BanyanMark className="h-8 w-8 shrink-0 text-primary sm:h-9 sm:w-9" />
          <span className="whitespace-nowrap font-serif text-body font-semibold tracking-tight sm:text-h3">
            Project Banyan
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
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
        {/* Below 360px the name, the mark and a button cannot all fit without
            shrinking the name past the point of being readable. The name wins:
            this button repeats the Get involved section further down. */}
        <div className="hidden min-[360px]:flex">
          <Button size="sm" render={<a href="#get-involved" />}>
            Support us
          </Button>
        </div>
      </div>
    </header>
  )
}
