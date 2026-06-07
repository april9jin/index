export default function Hero({ item }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      height: 'clamp(220px, 52vw, 520px)',
      paddingLeft: 'var(--side-pad)',
      paddingRight: 'var(--side-pad)',
      background: '#f2f2f0',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, var(--bg) 0%, transparent 55%)',
      }} />

      <div style={{ position: 'relative', zIndex: 10, paddingBottom: 'clamp(32px, 6vw, 56px)', maxWidth: '600px' }}>
        {/* 칩 태그 */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
          {['기획', '디자인', '개발', '이미지'].map(tag => (
            <span key={tag} style={{
              fontSize: '10px', padding: '3px 10px', borderRadius: '999px',
              border: '1px solid var(--border)', color: 'var(--muted)',
              background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(4px)',
            }}>{tag}</span>
          ))}
        </div>

        {/* 타이틀 */}
        <h1 style={{
          fontSize: 'clamp(28px, 6vw, 52px)',
          fontWeight: 700, lineHeight: 1.15,
          letterSpacing: '-0.02em', marginBottom: '10px',
          color: 'var(--accent)',
        }}>{item.title}</h1>

        {/* 설명 */}
        <p style={{
          fontSize: 'clamp(12px, 1.8vw, 14px)',
          lineHeight: 1.75, color: 'var(--muted)',
          whiteSpace: 'pre-line',
        }}>{item.description}</p>
      </div>
    </div>
  )
}
