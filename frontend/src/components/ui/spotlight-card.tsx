import React from 'react';

export const SpotlightCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 shadow-2xl">
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-br from-white/10 to-transparent" />
      {children}
    </div>
  );
};
