import { useState, useEffect } from 'react'

export default function Navbar({ name = 'Jin Studio' }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Portfolio',    id: 'portfolio' },
    { label: 'Vibe Coding',  id: 'vibe' },
    { label: 'Image',        id: 'image' },
    { label: 'Video',        id: 'video' },
  ]

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          display: 'flex', alignItems: 'center', height: '52px',
          paddingLeft: 'var(--side-pad)',
          paddingRight: 'var(--side-pad)',
          background: scrolled || menuOpen ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0)',
          borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : '1px solid transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        {/* 로고 */}
        <a href="/" style={{
          color: 'var(--accent)', fontSize: '13px', fontWeight: 600,
          letterSpacing: '-0.01em', textDecoration: 'none', flexShrink: 0,
          transition: 'opacity 0.15s',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >{name}</a>

        {/* 데스크탑 메뉴 */}
        <div style={{ width: '1px', height: '14px', background: 'var(--border)', margin: '0 24px', flexShrink: 0 }}
          className="hidden sm:block" />
        <div className="hidden sm:flex" style={{ alignItems: 'center', gap: '20px' }}>
          {links.map(({ label, id }) => (
            <a key={id} href={`#${id}`} style={{
              color: 'var(--muted)', fontSize: '12px', fontWeight: 500,
              textDecoration: 'none', transition: 'color 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >{label}</a>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        {/* 데스크탑 Contact */}
        <a href="mailto:your@email.com"
          className="hidden sm:inline-flex"
          style={{
            color: 'var(--muted)', fontSize: '11px', padding: '5px 14px',
            borderRadius: '999px', border: '1px solid var(--border)',
            textDecoration: 'none', transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
        >Contact</a>

        {/* 모바일 햄버거 */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(v => !v)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: 'var(--accent)' }}
        >
          {menuOpen
            ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </nav>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div
          className="sm:hidden"
          style={{
            position: 'fixed', top: '52px', left: 0, right: 0, zIndex: 49,
            background: 'rgba(255,255,255,0.97)',
            borderBottom: '1px solid var(--border)',
            backdropFilter: 'blur(12px)',
            padding: '12px var(--side-pad) 16px',
          }}
        >
          {links.map(({ label, id }) => (
            <a key={id} href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '10px 0',
                color: 'var(--accent)', fontSize: '14px', fontWeight: 500,
                textDecoration: 'none', borderBottom: '1px solid var(--border)',
              }}
            >{label}</a>
          ))}
          <a href="mailto:your@email.com" style={{
            display: 'block', marginTop: '12px',
            color: 'var(--muted)', fontSize: '13px', textDecoration: 'none',
          }}>Contact</a>
        </div>
      )}
    </>
  )
}
