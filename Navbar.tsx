import { useState } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Tools', href: 'https://toolsbyjrn.vercel.app' },
  { label: 'Merge PDF', href: 'https://merge-pdf-two.vercel.app/' },
  { label: 'DIU Cover', href: 'https://diu-cover-page-omega.vercel.app/' },
  { label: 'GitHub', href: 'https://github.com/jony99jrn' },
]

export default function Navbar() {
  const [active, setActive] = useState('Tools')

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 40px' }}
    >
      {/* Wordmark */}
      <a
        href="https://toolsbyjrn.vercel.app"
        target="_blank" rel="noopener noreferrer"
        style={{ fontSize: '19px', fontWeight: 600, color: '#fff', letterSpacing: '-0.01em', textDecoration: 'none' }}
      >
        Tools by JRN
      </a>

      {/* Centered link pill */}
      <div
        style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: '2px', padding: '6px',
          borderRadius: '999px',
          background: 'rgba(10,14,20,0.5)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)',
        }}
      >
        {navLinks.map(({ label, href }) => {
          const isActive = active === label
          return (
            <a
              key={label}
              href={href}
              target="_blank" rel="noopener noreferrer"
              onClick={() => setActive(label)}
              style={{
                position: 'relative', padding: '8px 16px', borderRadius: '999px',
                fontSize: '13px', fontWeight: 500,
                color: isActive ? '#fff' : 'rgba(255,255,255,0.66)',
                textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color 0.2s ease', cursor: 'pointer',
              }}
              onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.9)' }}
              onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.66)' }}
            >
              {isActive && (
                <motion.span
                  layoutId="harbor-nav"
                  style={{ position: 'absolute', inset: 0, borderRadius: '999px', background: 'rgba(250,129,18,0.35)', border: '1px solid rgba(250,129,18,0.5)' }}
                  transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                />
              )}
              <span style={{ position: 'relative', zIndex: 1 }}>{label}</span>
            </a>
          )
        })}
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <a href="https://github.com/jony99jrn" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>GitHub</a>
        <motion.a
          href="https://toolsbyjrn.vercel.app"
          target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.04, background: 'rgba(250,129,18,0.9)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: '10px 20px', borderRadius: '999px', fontSize: '14px', fontWeight: 500,
            color: '#fff', textDecoration: 'none',
            background: 'rgba(250,129,18,0.75)',
            border: '1px solid rgba(250,129,18,0.9)',
            backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
            whiteSpace: 'nowrap',
          }}
        >
          Explore Tools
        </motion.a>
      </div>
    </motion.nav>
  )
}
