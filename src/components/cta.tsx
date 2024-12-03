import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-24 px-4 backdrop-blur-sm bg-blue-600/90 dark:bg-blue-900/90">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Ready to start your investment journey?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Join thousands of successful investors today.
        </p>
        <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-white">
          Get Started Now
        </Button>
      </div>
    </section>
  )
}