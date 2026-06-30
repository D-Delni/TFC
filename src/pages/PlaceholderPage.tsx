import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

export default function PlaceholderPage() {
  const { pathname } = useLocation()
  const title = pathname.replace(/\//g, ' ').replace(/-/g, ' ').trim() || 'Page'
  const formatted = title.replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <>
      <title>{formatted} - Tenerife Mortgage</title>
      <Header />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center py-20 px-4">
          <h1 className="font-display text-4xl font-bold text-brand-blue mb-4">{formatted}</h1>
          <p className="text-gray-500 text-lg">Content coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
