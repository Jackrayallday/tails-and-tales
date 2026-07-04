function Footer() {
  return (
    <footer className="flex flex-col gap-2 border-t border-slate-200 bg-[#fbf7ef] px-6 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
      <p>Dog Gallery by Jack</p>
      <a
        className="font-semibold text-slate-700 hover:text-slate-950"
        href="https://jackray.dev"
        target="_blank"
        rel="noreferrer"
      >
        jackray.dev
      </a>
    </footer>
  )
}

export default Footer
