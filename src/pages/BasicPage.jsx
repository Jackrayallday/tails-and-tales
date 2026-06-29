function BasicPage({ title, description }) {
  return (
    <main className="flex-1 bg-[#fbf7ef] px-6 pb-16 pt-36 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-orange-700">
          Tails & Tales
        </p>
        <h1 className="text-5xl font-bold text-slate-950">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          {description}
        </p>
      </div>
    </main>
  )
}

export default BasicPage
