import { Link } from 'react-router-dom'

function SectionHeader({ title, action, href = '/' }) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <h2 className="text-3xl font-bold text-slate-950">{title}</h2>
      <Link className="font-semibold text-orange-700" to={href}>
        {action} <span aria-hidden="true">-&gt;</span>
      </Link>
    </div>
  )
}

export default SectionHeader
