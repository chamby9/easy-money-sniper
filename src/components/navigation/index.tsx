import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl">
              EasyMoneySniper
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/features" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
              Features
            </Link>
            <Link href="/pricing" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
              About
            </Link>
          </div>

          <div className="flex items-center">
            <Button variant="outline" className="mr-2">
              Sign In
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;