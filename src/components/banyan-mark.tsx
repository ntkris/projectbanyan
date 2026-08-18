/**
 * The Project Banyan mark.
 *
 * A banyan drops aerial roots from its canopy. Most hang in mid-air, still on
 * their way down; the ones that reach the ground thicken into trunks, until a
 * single tree is holding itself up on many supports and has become a grove.
 *
 * So: a broad billowing crown, a curtain of roots hanging at every length
 * beneath it, and one trunk that has landed and flared where it meets the
 * ground. The roots are notched out of the crown's underside and traced as
 * part of one closed outline, so the whole silhouette is a single path and
 * inverts cleanly on any background. The foliage masses are separate circles
 * in the same fill, which read as one shape.
 */
export function BanyanMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Project Banyan"
    >
      <path d="M3 23A29 15 0 0 1 61 23A29 15 0 0 1 56.4 31.11L55.9 51Q55 52.26 54.1 51L53.6 27L50.5 27L50 43Q49 44.4 48 43L47.5 21L44.1 21L43.6 48Q42.5 49.54 41.4 48L40.9 28L36.75 28L37.5 57L26.5 57L27.25 26L23.1 26L22.6 45Q21.5 46.54 20.4 45L19.9 20L16.5 20L16 50Q15 51.4 14 50L13.5 27L10.5 27L10 44Q9 45.4 8 44L7.5 31.03A29 15 0 0 1 3 23Z" />
      <circle cx="12" cy="18" r="9" />
      <circle cx="26" cy="13" r="11" />
      <circle cx="42" cy="14" r="10.5" />
      <circle cx="53" cy="19" r="8" />
    </svg>
  )
}
