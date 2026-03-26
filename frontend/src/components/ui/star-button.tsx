import React from 'react';

export const StarButton = ({ label }: { label: string }) => {
  return (
    <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 p-0.5 text-sm font-medium text-white transition-all hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800">
      <span className="relative rounded-full bg-slate-900 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
        <span className="animate-[star-btn-pulse_2s_infinite]">{label}</span>
      </span>
    </button>
  );
};
