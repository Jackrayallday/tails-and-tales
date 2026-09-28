import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PawIcon, UserIcon } from '../ui/Icons.jsx'

const navLinkClassName = ({ isActive }) =>
  `rounded-full px-4 py-2 transition ${
    isActive
      ? 'bg-slate-950 text-white shadow-md shadow-slate-950/10'
      : 'text-slate-950 hover:bg-slate-950 hover:text-white'
  }`

const mobileNavLinkClassName = ({ isActive }) =>
  `rounded-xl px-4 py-3 font-semibold transition ${
    isActive
      ? 'bg-slate-950 text-white'
      : 'text-slate-950 hover:bg-orange-100'
  }`

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenuOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', closeMenuOnEscape)
    return () => document.removeEventListener('keydown', closeMenuOnEscape)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-[#fbf7ef]/45 shadow-sm shadow-white/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-10">
        <Link
          className="flex items-center gap-3 text-slate-950 no-underline"
          to="/"
          onClick={closeMenu}
        >
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
          className="hidden gap-2 text-sm font-semibold text-slate-950 lg:flex lg:gap-3"
          aria-label="Main navigation"
        >
          <NavLink className={navLinkClassName} to="/breeds">
            Breeds
          </NavLink>
          <NavLink className={navLinkClassName} to="/collections">
            Collections
          </NavLink>
          <NavLink className={navLinkClassName} to="/how-it-works">
            How It Works
          </NavLink>
          <NavLink className={navLinkClassName} to="/about">
            About
          </NavLink>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-950 text-slate-950 transition hover:bg-slate-950 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
            aria-label="Account"
            to="/user"
          >
            <UserIcon />
          </Link>
          <Link
            className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-700 hover:shadow-lg hover:shadow-slate-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
            to="/start"
          >
            Get Started
          </Link>
        </div>

        <button
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-slate-950 text-slate-950 transition hover:bg-slate-950 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 lg:hidden"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          className="mx-4 mb-4 grid gap-1 rounded-2xl border border-slate-200 bg-[#fbf7ef] p-3 shadow-xl shadow-slate-950/15 lg:hidden"
          aria-label="Mobile navigation"
        >
          <NavLink className={mobileNavLinkClassName} to="/breeds" onClick={closeMenu}>
            Breeds
          </NavLink>
          <NavLink
            className={mobileNavLinkClassName}
            to="/collections"
            onClick={closeMenu}
          >
            Collections
          </NavLink>
          <NavLink
            className={mobileNavLinkClassName}
            to="/how-it-works"
            onClick={closeMenu}
          >
            How It Works
          </NavLink>
          <NavLink className={mobileNavLinkClassName} to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <div className="my-2 border-t border-slate-200" />
          <NavLink className={mobileNavLinkClassName} to="/user" onClick={closeMenu}>
            <span className="flex items-center gap-3">
              <UserIcon />
              Account
            </span>
          </NavLink>
          <Link
            className="mt-1 rounded-xl bg-slate-950 px-4 py-3 text-center font-bold text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
            to="/start"
            onClick={closeMenu}
          >
            Get Started
          </Link>
        </nav>
      ) : null}
    </header>
  )
}

export default Header
