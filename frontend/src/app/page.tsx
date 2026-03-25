import React from 'react';
import { StarButton } from '@/components/ui/star-button';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { BackgroundComponents } from '@/components/ui/background-components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <BackgroundComponents />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-white mb-8">Smart Academic Assistant</h1>
      </div>
      <SpotlightCard>
        <div className="text-center">
          <p className="text-white mb-4">Empowering your academic journey with AI.</p>
          <StarButton label="Get Started" />
        </div>
      </SpotlightCard>
    </main>
  );
}
