import { useState, useEffect } from 'react'

/**
 * Suscribe a un media query y devuelve si coincide actualmente.
 * Seguro en el primer render (lee matchMedia de forma síncrona).
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}

/** True en pantallas de smartphone (< 768px, breakpoint `md` de Tailwind). */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 767px)')
}

/** True si el sistema del usuario pide reducir animaciones. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}
