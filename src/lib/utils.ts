import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * The type scale in index.css is named semantically (`text-body`, `text-lede`),
 * which tailwind-merge would otherwise read as colour utilities. It would then
 * treat `text-body` and `text-primary-foreground` as conflicting and drop one.
 * Registering them as font sizes keeps size and colour independent.
 */
const FONT_SIZES = ["label", "small", "body", "lede", "h3", "h2", "h1"]

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: FONT_SIZES }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
