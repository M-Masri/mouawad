import { Outlet } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export function MainLayout() {
  return (
    <div
      id="top"
      className="min-h-screen bg-espresso font-sans text-parchment antialiased"
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
