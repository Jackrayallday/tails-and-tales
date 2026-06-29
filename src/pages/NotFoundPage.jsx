import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="flex-1 bg-[#fbf7ef] px-6 pb-16 pt-36 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-orange-700">
          404
        </p>
        <h1 className="text-5xl font-bold text-slate-950">Page not found</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          That page does not exist yet, or the link points to a slug we do not
          have in the gallery.
        </p>
        <Link
          className="mt-8 inline-flex rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white"
          to="/"
        >
          Back home
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
