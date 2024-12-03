import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 to-orange-600 flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="relative">
          <h1 className="text-9xl font-black text-white opacity-20">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-32 h-32 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
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
            &quot;Hard work beats talent when talent fails to work hard&quot; - KD
          </p>
        </div>
      </div>
    </div>
  );
}