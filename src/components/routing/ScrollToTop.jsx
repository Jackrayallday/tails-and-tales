import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router swaps pages without a full browser reload, so the browser keeps
// the old scroll position unless we reset it when the route changes.
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
