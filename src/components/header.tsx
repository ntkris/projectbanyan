import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-foreground no-underline">
          <BanyanIcon className="h-8 w-8 text-primary" />
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

function BanyanIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2C16 2 12 8 12 14C12 16.5 13 18.5 14.5 20C13 20.5 11 21.5 9 23C7 24.5 6 26 6 28H26C26 26 25 24.5 23 23C21 21.5 19 20.5 17.5 20C19 18.5 20 16.5 20 14C20 8 16 2 16 2Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M16 14C16 14 14 17 12.5 19C11.5 20.3 10 21.5 8.5 22.5"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <path
        d="M16 14C16 14 18 17 19.5 19C20.5 20.3 22 21.5 23.5 22.5"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
      />
    </svg>
  )
}
