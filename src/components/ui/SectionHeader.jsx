import { Link } from 'react-router-dom'

function SectionHeader({ title, action, href = '/' }) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <h2 className="text-3xl font-bold text-slate-950">{title}</h2>
      <Link
        className="group inline-flex shrink-0 items-center gap-2 rounded-xl border-2 border-slate-950 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-slate-950 hover:text-white hover:shadow-lg hover:shadow-slate-950/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 sm:px-5"
        to={href}
      >
        {action}
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
    </div>
  )
}

export default SectionHeader
