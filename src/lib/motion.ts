/** Curva "en seco": arranca de golpe y frena rápido — sensación eléctrica, no perezosa. */
export const EASE_SNAP = [0.16, 1, 0.3, 1] as const

/** Entrada rápida estándar (reemplaza los antiguos duration: 0.5–0.7). */
export const fast = { duration: 0.32, ease: EASE_SNAP }

/** Entrada rápida con retraso fijo. */
export const fastDelay = (delay: number, duration = 0.32) => ({ duration, delay, ease: EASE_SNAP })

/** Entrada en cascada para listas/grids (tarjetas, etc.). */
export const stagger = (i: number, base = 0.05, duration = 0.32) => ({
  duration,
  delay: i * base,
  ease: EASE_SNAP,
})

/** Resorte rápido para hover/tap de tarjetas y bloques. */
export const springSnap = { type: 'spring' as const, stiffness: 420, damping: 20, mass: 0.6 }

/** Resorte muy rápido para botones — el "pop" eléctrico. */
export const springPop = { type: 'spring' as const, stiffness: 500, damping: 15 }
