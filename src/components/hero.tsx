import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Transform your <span className="text-blue-600 dark:text-blue-400">financial future</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Take control of your investments with smart, data-driven strategies. Join thousands of successful investors who have already discovered the power of our platform.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              Start Investing
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none rounded-xl bg-white/10 shadow-2xl backdrop-blur-sm p-8 dark:bg-gray-800/10">
            <div className="w-[36rem] h-[20rem] bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 absolute"></div>
            <div className="relative w-[36rem] h-[20rem] flex items-center justify-center text-white text-opacity-50">
              [Dashboard Preview]</div>
          </div>
        </div>
      </div>
    </div>
  )
}