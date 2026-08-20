import { useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Hub', href: 'https://toolsbyjrn.vercel.app' },
  { label: 'Merge PDF', href: 'https://merge-pdf-two.vercel.app/' },
  { label: 'DIU Cover Page', href: 'https://diu-cover-page-omega.vercel.app/' },
  { label: 'GitHub', href: 'https://github.com/jony99jrn' },
]

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6">
      <nav
        className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md"
        onMouseLeave={() => setHovered(null)}
      >
        <span
          className="px-3 text-xl leading-none text-white"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Tools by JRN
        </span>
        <div className="mx-1 hidden h-5 w-px bg-white/15 sm:block" />
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHovered(link.label)}
            className="relative rounded-full px-4 py-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            {hovered === link.label && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-white/10"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </a>
        ))}
      </nav>
    </header>
  )
}
