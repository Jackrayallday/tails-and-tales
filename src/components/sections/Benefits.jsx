import { Link } from 'react-router-dom'
import { benefits } from '../../data/benefits.js'

function Benefits() {
  return (
    <section className="relative z-20 mx-auto -mt-16 max-w-7xl px-6 pb-12 lg:px-10">
      <div className="grid gap-5 rounded-2xl bg-white/90 p-6 shadow-2xl shadow-slate-950/10 ring-1 ring-slate-950/5 backdrop-blur md:grid-cols-2 lg:grid-cols-4 lg:p-7">
        {benefits.map(({ title, description, href }, index) => {
          const content = (
            <>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-slate-950 ring-1 ring-orange-200 transition group-hover:bg-orange-200 group-hover:text-orange-950">
              {index + 1}
              </span>
              <div>
                <h2 className="text-base font-bold text-slate-950 transition group-hover:text-orange-800">
                  {title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  {description}
                </p>
              </div>
            </>
          )

          if (href) {
            return (
              <Link
                className="group flex items-start gap-4 rounded-xl p-2 -m-2 transition hover:-translate-y-0.5 hover:bg-orange-50/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                key={title}
                to={href}
              >
                {content}
              </Link>
            )
          }

          return (
            <article className="group flex items-start gap-4 rounded-xl p-2 -m-2" key={title}>
              {content}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Benefits
