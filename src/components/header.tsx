import { BanyanMark } from "@/components/banyan-mark"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-foreground no-underline">
          <BanyanMark className="h-8 w-8 text-primary" />
          <span className="text-lg font-semibold tracking-tight">
            Project Banyan
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#mission" className="text-sm text-muted-foreground hover:text-foreground transition-colors no-underline">
            Mission
          </a>
          <a href="#who-we-support" className="text-sm text-muted-foreground hover:text-foreground transition-colors no-underline">
            Who We Support
          </a>
          <a href="#get-involved" className="text-sm text-muted-foreground hover:text-foreground transition-colors no-underline">
            Get Involved
          </a>
        </nav>
        <Button size="sm" render={<a href="#get-involved" />}>
          Support Us
        </Button>
      </div>
    </header>
  )
}
