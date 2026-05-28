export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-semibold text-foreground">Project Banyan</p>
            <p className="text-sm text-muted-foreground mt-1">
              Creating impact for people with Parkinson's.
            </p>
          </div>
          <nav className="flex gap-6">
            <a
              href="#mission"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors no-underline"
            >
              Mission
            </a>
            <a
              href="#who-we-support"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors no-underline"
            >
              Who We Support
            </a>
            <a
              href="#get-involved"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors no-underline"
            >
              Get Involved
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Project Banyan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
