import { createRootRoute, Outlet } from '@tanstack/react-router'
import { ScrollToTop } from '../components/ScrollToTop'

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  ),
})