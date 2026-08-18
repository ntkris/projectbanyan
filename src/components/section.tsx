import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Every section on the page goes through here, so the page rhythm, the page
 * width and the heading treatment are decided once rather than per component.
 * Sections sit on paper and are separated by a hairline rule; `tone="band"`
 * tints one to set it apart without introducing a card.
 */
export function Section({
  id,
  tone = "paper",
  className,
  children,
}: {
  id?: string
  tone?: "paper" | "band"
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-border py-20 md:py-28",
        tone === "band" && "bg-accent",
        className
      )}
    >
      <div className="mx-auto max-w-page px-6">{children}</div>
    </section>
  )
}

/**
 * One heading treatment for the whole site: a label, a serif heading, and a
 * rule that runs the width of the column beneath it.
 */
export function SectionHeading({
  label,
  children,
  className,
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <header className={cn("border-b border-border pb-5", className)}>
      <p className="text-label uppercase text-muted-foreground">{label}</p>
      <h2 className="mt-3 text-h2 font-semibold tracking-tight">{children}</h2>
    </header>
  )
}

/** Prose capped at the measure the eye can reliably sweep back across. */
export function Prose({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={cn("max-w-measure", className)}>{children}</div>
}
