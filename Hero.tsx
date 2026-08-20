import { motion } from 'framer-motion'

const tools = ["Merge PDF", "DIU Cover Page", "PDF Compressor", "PPTX to PDF", "More Coming"]

export default function Hero() {
  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <video style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} src="/hero.mp4" autoPlay muted loop playsInline />
      {/* Overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0.05) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, transparent 30%, transparent 65%, rgba(0,0,0,0.21) 100%)' }} />
      <div style={{ position: 'absolute', top: '-10%', left: '5%', width: '700px', height: '700px', background: 'radial-gradient(ellipse at 30% 30%, rgba(250,129,18,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />

      {/* Centered content */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px' }}>
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.15, ease: 'easeOut' }}
          style={{ margin: 0, fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: 'clamp(3rem, 7.6vw, 6rem)', lineHeight: 1, color: '#fff', textShadow: '0 2px 30px rgba(0,0,0,0.35)' }}
        >
          Your assignments,<br />sorted.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          style={{ margin: '14px 0 0', maxWidth: '440px', fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.88)', fontFamily: "'Inter', sans-serif", textShadow: '0 1px 14px rgba(0,0,0,0.45)' }}
        >
          Free, fast tools built for students — merge PDFs, generate DIU cover pages, and more, all in one place.
        </motion.p>

        <motion.a
          href="https://toolsbyjrn.vercel.app"
          target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.03, background: 'rgba(250,129,18,0.3)' }}
          whileTap={{ scale: 0.97 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginTop: '26px', padding: '8px 8px 8px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: 500, fontFamily: "'Inter', sans-serif", color: '#fff', textDecoration: 'none', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
        >
          Explore the tools
          <span style={{ width: '28px', height: '28px', borderRadius: '999px', background: '#FA8112', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </motion.a>
      </div>

      {/* Tools strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10, padding: '26px 24px 34px', textAlign: 'center' }}
      >
        <p style={{ margin: '0 0 18px', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontFamily: "'Inter', sans-serif", textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}>
          Tools on the hub
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '38px', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto' }}>
          {tools.map((name) => (
            <div
              key={name}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.72)', transition: 'color 0.25s ease', cursor: 'default', textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.color = '#fff' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.color = 'rgba(255,255,255,0.72)' }}
            >
              <span style={{ width: '7px', height: '7px', borderRadius: '999px', background: 'linear-gradient(135deg, #FA8112, #C4650D)', flexShrink: 0 }} />
              <span style={{ fontSize: '15px', fontWeight: 600, fontFamily: "'Inter', sans-serif", letterSpacing: '0.01em' }}>{name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
