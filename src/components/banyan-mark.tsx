/**
 * The Project Banyan mark. A banyan drops aerial roots from its canopy; they
 * hang at every length and a few thicken into new trunks, so one tree ends up
 * holding itself up on many supports. The mark is that canopy in section — a
 * wide crown combed from below into a curtain of roots, two of them broad
 * enough to have landed.
 *
 * Geometry is generated, not hand-tuned: see the emitter in the logo notes.
 * Roots are cut out of the crown with the even-odd fill rule, so the mark is
 * a single closed silhouette that inverts cleanly on any background.
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
      <path d="M4 24A28 21 0 0 1 60 24A28 21 0 0 1 56.5 34.17L55.7 21L53.3 21L52.5 38.3A28 21 0 0 1 51 39.43L50.2 29L47.8 29L47 41.73A28 21 0 0 1 45 42.6L44.2 18L41.8 18L41 43.89A28 21 0 0 1 38 44.51L37.2 25L34.8 25L34 44.95A28 21 0 0 1 31.5 45L30.7 14L28.3 14L27.5 44.73A28 21 0 0 1 25 44.33L24.2 28L21.8 28L21 43.31A28 21 0 0 1 18 42.19L17.2 17L14.8 17L14 40.09A28 21 0 0 1 12 38.7L11.2 23L8.8 23L8 34.82A28 21 0 0 1 4 24Z" />
    </svg>
  )
}
