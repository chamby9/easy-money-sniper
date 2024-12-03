import { LineChart, Activity, Shield } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: 'Smart Analytics',
      description: 'Advanced data analysis to help you make informed investment decisions.',
      icon: LineChart,
    },
    {
      title: 'Real-time Tracking',
      description: 'Monitor your investments in real-time with our powerful tracking tools.',
      icon: Activity,
    },
    {
      title: 'Secure Platform',
      description: 'Bank-grade security to keep your investments safe and protected.',
      icon: Shield,
    },
  ]

  return (
    <section className="py-24 px-4 backdrop-blur-sm bg-white/30 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <feature.icon className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}