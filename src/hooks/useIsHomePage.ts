import { useLocation } from 'react-router-dom'

export function useIsHomePage(): boolean {
  const { pathname } = useLocation()
  return pathname === '/'
}
