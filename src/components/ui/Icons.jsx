export function PawIcon({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="18" cy="22" r="8" fill="currentColor" />
      <circle cx="32" cy="14" r="8" fill="currentColor" />
      <circle cx="46" cy="22" r="8" fill="currentColor" />
      <circle cx="22" cy="38" r="7" fill="currentColor" />
      <circle cx="42" cy="38" r="7" fill="currentColor" />
      <path
        d="M20 47c0-8 6-14 12-14s12 6 12 14c0 7-5 10-12 10s-12-3-12-10Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function SearchIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export function HeartIcon({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.8 4.6c-1.7-1.7-4.4-1.7-6.1 0L12 7.3 9.3 4.6c-1.7-1.7-4.4-1.7-6.1 0s-1.7 4.4 0 6.1l8.8 8.8 8.8-8.8c1.7-1.7 1.7-4.4 0-6.1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export function UserIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 21a8 8 0 0 0-16 0m12-13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}
