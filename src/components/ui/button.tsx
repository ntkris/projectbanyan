import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Sizes are set for hands that may not be steady: every size is at least 44px
 * tall and the default is 48px. Focus is left to the global `:focus-visible`
 * outline in index.css rather than a ring here, so it can never be suppressed.
 * That is why this deliberately does not set `outline-none`.
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-colors select-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border-border-strong bg-background text-foreground hover:bg-muted",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        ghost: "text-foreground hover:bg-muted",
        destructive:
          "bg-destructive text-primary-foreground hover:bg-destructive/90",
        link: "text-primary underline underline-offset-4 hover:no-underline",
      },
      size: {
        default: "h-12 gap-2 px-5 text-small",
        sm: "h-11 gap-2 px-4 text-small",
        lg: "h-14 gap-2.5 px-7 text-body",
        icon: "size-12",
        "icon-sm": "size-11",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button }
