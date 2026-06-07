import { useState, useEffect } from 'react'

export default function Navbar({ name = 'Jin Studio' }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center h-14 transition-all duration-300"
      style={{
        paddingLeft: 'var(--card-w)',
        paddingRight: 'var(--card-w)',
        background: scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      {/* 로고 */}
      <a href="/"
        style={{
          color: 'var(--accent)',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '-0.01em',
          flexShrink: 0,
          opacity: 1,
          textDecoration: 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        {name}
      </a>

      {/* 로고와 메뉴 사이 구분선 */}
      <div style={{ width: '1px', height: '14px', background: 'var(--border)', margin: '0 28px', flexShrink: 0 }} />

      {/* 카테고리 메뉴 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        {[
          { label: 'Portfolio', id: 'portfolio' },
          { label: 'Vibe Coding', id: 'vibe' },
          { label: 'Image', id: 'image' },
          { label: 'Video', id: 'video' },
        ].map(({ label, id }) => (
          <a key={id} href={`#${id}`}
            style={{ color: 'var(--muted)', fontSize: '12px', fontWeight: 500, textDecoration: 'none', transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            {label}
          </a>
        ))}
      </div>

      <div style={{ flex: 1 }} />

      <a
        href="mailto:your@email.com"
        style={{
          color: 'var(--muted)',
          fontSize: '11px',
          padding: '6px 16px',
          borderRadius: '999px',
          border: '1px solid var(--border)',
          textDecoration: 'none',
          transition: 'all 0.15s',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
        onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
      >
        Contact
      </a>
    </nav>
  )
}
