import { useEffect } from 'react'
import { useRouterState } from '@tanstack/react-router'

export function ScrollToTop() {
  const location = useRouterState({
    select: (state) => state.location,
  })

  useEffect(() => {
    if (location.hash) return

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [location.pathname, location.hash])

  return null
}