import { useRef } from 'react'
import ProjectCard from './ProjectCard'

export default function CategoryRow({ category }) {
  const rowRef = useRef(null)
  const scroll = (dir) => rowRef.current?.scrollBy({ left: dir * 500, behavior: 'smooth' })

  return (
    <section style={{ marginBottom: '32px' }} id={category.id}>
      <h2 style={{
        paddingLeft: 'var(--side-pad)',
        paddingRight: 'var(--side-pad)',
        marginBottom: '10px',
        color: 'var(--accent)',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.01em',
      }}>
        {category.label}
      </h2>

      <div style={{ position: 'relative' }} className="group/row">
        {/* 왼쪽 화살표 — 모바일에서 숨김 */}
        <button onClick={() => scroll(-1)}
          className="hidden sm:flex"
          style={{
            position: 'absolute', left: 0, top: 0, bottom: '8px', zIndex: 20,
            width: '48px', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(to right, var(--bg) 60%, transparent)',
            border: 'none', cursor: 'pointer', opacity: 0, transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '1'}
          onMouseLeave={e => e.currentTarget.style.opacity = '0'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--muted)' }}>
            <polyline points="15,18 9,12 15,6"/>
          </svg>
        </button>

        {/* 카드 행 */}
        <div ref={rowRef} className="row-scroll" style={{
          paddingLeft: 'var(--side-pad)',
          paddingRight: 'var(--side-pad)',
        }}>
          {category.items.map(item => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>

        {/* 오른쪽 화살표 — 모바일에서 숨김 */}
        <button onClick={() => scroll(1)}
          className="hidden sm:flex"
          style={{
            position: 'absolute', right: 0, top: 0, bottom: '8px', zIndex: 20,
            width: '48px', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(to left, var(--bg) 60%, transparent)',
            border: 'none', cursor: 'pointer', opacity: 0, transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '1'}
          onMouseLeave={e => e.currentTarget.style.opacity = '0'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--muted)' }}>
            <polyline points="9,18 15,12 9,6"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
