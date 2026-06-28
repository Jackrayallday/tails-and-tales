function SectionHeader({ title, action }) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <h2 className="text-3xl font-bold text-slate-950">{title}</h2>
      <a className="font-semibold text-orange-700" href="/">
        {action} <span aria-hidden="true">-&gt;</span>
      </a>
    </div>
  )
}

export default SectionHeader
