import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

/** Link de react-router con física de resorte para hover/tap — el "pop" eléctrico de los CTAs. */
export const MotionLink = motion.create(Link)
