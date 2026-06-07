import { useRef } from 'react'
import ProjectCard from './ProjectCard'

export default function CategoryRow({ category }) {
  const rowRef = useRef(null)
  const scroll = (dir) => rowRef.current?.scrollBy({ left: dir * 640, behavior: 'smooth' })

  return (
    <section className="mb-10" id={category.id}>
      <h2
        className="mb-3 transition-colors"
        style={{
          paddingLeft: 'var(--card-w)',
          paddingRight: 'var(--card-w)',
          color: 'var(--accent)',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.02em',
        }}
      >
        {category.label}
      </h2>

      <div className="relative group/row">
        <button onClick={() => scroll(-1)}
          className="absolute left-0 top-0 bottom-8 z-20 flex items-center justify-center w-16 opacity-0 group-hover/row:opacity-100 transition-opacity"
          style={{ background: 'linear-gradient(to right, var(--bg) 60%, transparent)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            style={{ color: 'var(--muted)' }}>
            <polyline points="15,18 9,12 15,6"/>
          </svg>
        </button>

        <div ref={rowRef} className="row-scroll"
          style={{ paddingLeft: 'var(--card-w)', paddingRight: 'var(--card-w)' }}>
          {category.items.map(item => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>

        <button onClick={() => scroll(1)}
          className="absolute right-0 top-0 bottom-8 z-20 flex items-center justify-center w-16 opacity-0 group-hover/row:opacity-100 transition-opacity"
          style={{ background: 'linear-gradient(to left, var(--bg) 60%, transparent)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            style={{ color: 'var(--muted)' }}>
            <polyline points="9,18 15,12 9,6"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
