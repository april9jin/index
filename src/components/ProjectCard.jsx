import { useState } from 'react'

export default function ProjectCard({ item }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={item.link}
      target={item.link.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      style={{
        position: 'relative',
        flexShrink: 0,
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'block',
        textDecoration: 'none',
        width: 'var(--card-w)',
        height: 'var(--card-h)',
        background: item.color || 'var(--surface)',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        boxShadow: hovered ? '0 10px 28px rgba(0,0,0,0.13)' : '0 1px 3px rgba(0,0,0,0.07)',
        zIndex: hovered ? 10 : 1,
        WebkitTapHighlightColor: 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {item.thumb && (
        <img src={item.thumb} alt={item.title}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      )}

      {/* 전체 오버레이 */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.14)' }} />

      {/* 하단 그라데이션 */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.05) 55%, transparent 100%)',
      }} />

      {/* 텍스트 */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '8px 10px' }}>
        <p style={{ color: '#fff', fontSize: '11px', fontWeight: 600, lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {item.title}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '10px', marginTop: '1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {item.subtitle}
        </p>
      </div>

      {/* 호버 플레이 — 모바일 터치에도 반응하지 않도록 pointer-events none */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.2s ease',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: '32px', height: '32px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.88)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#1a1a1a"><polygon points="5,3 19,12 5,21"/></svg>
        </div>
      </div>
    </a>
  )
}
