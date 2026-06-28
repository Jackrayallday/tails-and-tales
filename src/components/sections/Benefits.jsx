import { benefits } from '../../data/galleryData.js'
import SimpleIcon from '../ui/SimpleIcon.jsx'

function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
      <div className="grid gap-6 rounded-3xl bg-white/80 p-7 shadow-xl shadow-slate-950/5 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map(([title, description], index) => (
          <article className="flex items-center gap-4" key={title}>
            <SimpleIcon>{index + 1}</SimpleIcon>
            <div>
              <h3 className="font-bold text-slate-950">{title}</h3>
              <p className="text-sm leading-6 text-slate-700">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Benefits
