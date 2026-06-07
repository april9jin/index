export default function Hero({ item }) {
  return (
    <div
      className="relative w-full flex items-end overflow-hidden"
      style={{
        height: 'clamp(260px, 42vw, 520px)',
        paddingLeft: 'var(--card-w)',
        paddingRight: 'var(--card-w)',
        background: '#f2f2f0',
      }}
    >
      {/* 하단 페이드 */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to top, var(--bg) 0%, transparent 55%)',
      }} />

      {/* 소개 텍스트 */}
      <div className="relative z-10 pb-14 max-w-2xl">
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {['기획', '디자인', '개발', '이미지'].map(tag => (
            <span key={tag} style={{
              fontSize: '11px',
              padding: '3px 10px',
              borderRadius: '999px',
              border: '1px solid var(--border)',
              color: 'var(--muted)',
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(4px)',
            }}>
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 tracking-tight"
          style={{ color: 'var(--accent)' }}>
          {item.title}
        </h1>
        <p className="text-sm leading-7 whitespace-pre-line" style={{ color: 'var(--muted)' }}>
          {item.description}
        </p>
      </div>
    </div>
  )
}
