import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryRow from './components/CategoryRow'
import { categories } from './data'

const [heroCategory, ...contentCategories] = categories

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navbar name="Jin Studio" />
      <Hero item={heroCategory.items[0]} />
      <div className="pb-24">
        {contentCategories.map(cat => (
          <CategoryRow key={cat.id} category={cat} />
        ))}
      </div>
      <footer style={{ borderTop: '1px solid var(--border)', color: 'var(--muted)' }}
        className="text-center text-xs py-8">
        © 2025 Jin Studio
      </footer>
    </div>
  )
}
