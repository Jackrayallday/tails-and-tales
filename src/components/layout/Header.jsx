import { Link, NavLink } from 'react-router-dom'
import { HeartIcon, PawIcon, UserIcon } from '../ui/Icons.jsx'

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-[#fbf7ef]/45 shadow-sm shadow-white/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <Link className="flex items-center gap-3 text-slate-950 no-underline" to="/">
          <PawIcon className="h-7 w-7 text-slate-950" />
          <span>
            <span className="block text-xl font-bold leading-none">
              Tails & Tales
            </span>
            <span className="block text-[0.55rem] font-bold uppercase tracking-[0.12em]">
              Every breed has a story.
            </span>
          </span>
        </Link>

        <nav
          className="flex flex-wrap gap-5 text-sm font-semibold text-slate-950 md:gap-9"
          aria-label="Main navigation"
        >
          <NavLink className="hover:text-slate-950" to="/breeds">
            Breeds
          </NavLink>
          <NavLink className="hover:text-slate-950" to="/collections">
            Collections
          </NavLink>
          <NavLink className="hover:text-slate-950" to="/how-it-works">
            How It Works
          </NavLink>
          <NavLink className="hover:text-slate-950" to="/about">
            About
          </NavLink>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <button className="text-slate-950" aria-label="Favorites">
            <HeartIcon />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-950 text-slate-950"
            aria-label="Account"
          >
            <UserIcon />
          </button>
          <Link
            className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white"
            to="/start"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
