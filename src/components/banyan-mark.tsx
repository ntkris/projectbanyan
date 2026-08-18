/**
 * The Project Banyan mark. A banyan drops aerial roots that reach the ground
 * and thicken into new trunks, so one tree ends up standing on many supports
 * and slowly becomes a grove. Here: a wide, low canopy on five landed columns,
 * with two roots still on their way down.
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
      <path d="M2.95 27A30 12 0 1 1 61.05 27C47.98 30.5 16.02 30.5 2.95 27Z" />
      <path d="M7.5 19C7.5 27 6.9 43 6.9 55L11.1 55C11.1 43 10.5 27 10.5 19Z" />
      <path d="M14.5 19C14.5 27 13.8 43 13.8 55L19.2 55C19.2 43 18.5 27 18.5 19Z" />
      <path d="M29.5 19C29.5 27 28.6 43 28.6 55L35.4 55C35.4 43 34.5 27 34.5 19Z" />
      <path d="M45.5 19C45.5 27 44.8 43 44.8 55L50.2 55C50.2 43 49.5 27 49.5 19Z" />
      <path d="M53.5 19C53.5 27 52.9 43 52.9 55L57.1 55C57.1 43 56.5 27 56.5 19Z" />
      {/* Two roots still descending, not yet landed. */}
      <path d="M22.8 19C22.8 27 22.8 28 22.8 38.8A1.2 1.2 0 0 0 25.2 38.8C25.2 28 25.2 27 25.2 19Z" />
      <path d="M38.8 19C38.8 27 38.8 30 38.8 40.8A1.2 1.2 0 0 0 41.2 40.8C41.2 30 41.2 27 41.2 19Z" />
    </svg>
  )
}
