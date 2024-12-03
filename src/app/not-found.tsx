import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BasketballIcon } from './resources/icons/basketball';
import { KEVIN_DURANT_QUOTES } from './resources/constants/quotes';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 to-orange-600 flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="relative">
          <h1 className="text-9xl font-black text-white opacity-20">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <BasketballIcon />
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Air Ball! Page Not Found</h2>
          <p className="text-white/80">
            Looks like this shot didn&apos;t make it. Even KD misses sometimes.
          </p>
        </div>

        <div className="space-y-2">
          <Button asChild className="bg-white text-orange-600 hover:bg-white/90">
            <Link href="/">
              Back to Home Court
            </Link>
          </Button>
          <p className="text-sm text-white/60">
            &quot;{KEVIN_DURANT_QUOTES.NOT_FOUND}&quot; - KD
          </p>
        </div>
      </div>
    </div>
  );
}