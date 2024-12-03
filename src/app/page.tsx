import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Features from '@/components/features'
import CTA from '@/components/cta'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      <Hero />
      <Features />
      <CTA />
    </main>
  )
}