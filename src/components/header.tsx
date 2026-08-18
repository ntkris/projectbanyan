import { BanyanMark } from "@/components/banyan-mark"
import { Button } from "@/components/ui/button"

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#who-we-support", label: "Who We Support" },
  { href: "#get-involved", label: "Get Involved" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground bg-background">
      <div className="mx-auto flex h-20 max-w-page items-center gap-8 px-6">
        <a
          href="/"
          className="mr-auto flex h-12 items-center gap-2.5 text-foreground no-underline"
        >
          <BanyanMark className="h-9 w-9 text-primary" />
          <span className="font-serif text-h3 font-semibold tracking-tight">
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
        <Button size="sm" render={<a href="#get-involved" />}>
          Support Us
        </Button>
      </div>
    </header>
  )
}
