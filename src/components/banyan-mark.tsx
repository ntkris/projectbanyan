/**
 * The Project Banyan mark: a banyan tree — broad crown, one trunk, four aerial
 * prop roots — with a tulip, the international symbol of Parkinson's, cut out
 * of the canopy as negative space.
 */
export function BanyanMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Project Banyan"
    >
      {/* Crown, with the tulip removed from it by the even-odd fill rule. */}
      <path
        d="M5 30 C2 20 8 11 17 11 C21 4 31 1 37 6 C46 3 56 9 55 16 C61 19 62 27 59 30 C50 34 14 34 5 30 Z
           M32 10 C33.5 14 34.5 16.5 36 17.5 C37 14.5 38.5 12.5 40 12.5 C41.5 15.5 41.5 20 41 22.5
           C40 26.5 36.5 29.5 32 29.5 C27.5 29.5 24 26.5 23 22.5 C22.5 20 22.5 15.5 24 12.5
           C25.5 12.5 27 14.5 28 17.5 C29.5 16.5 30.5 14 32 10 Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M28.5 32 C28.5 41 27.5 49 25.5 56 L38.5 56 C36.5 49 35.5 41 35.5 32 Z"
        fill="currentColor"
      />
      <g stroke="currentColor" strokeLinecap="round">
        <path d="M13 31 C11.5 39 11 48 11.5 54" strokeWidth="2.8" />
        <path d="M20.5 32.5 C20 40 19.5 48 19.5 54" strokeWidth="3.4" />
        <path d="M43.5 32.5 C44 40 44.5 48 44.5 54" strokeWidth="3.4" />
        <path d="M51 31 C52.5 39 53 48 52.5 54" strokeWidth="2.8" />
      </g>
    </svg>
  )
}
