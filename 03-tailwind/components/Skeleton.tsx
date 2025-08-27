import React from 'react';

export function Skeleton() {
  return (
    <div className="p-4 rounded-xl shadow-lg bg-white dark:bg-zinc-800 transition-colors duration-200 animate-pulse">
      <div className="w-full h-48 bg-gray-300 dark:bg-zinc-600 rounded-md"></div>
      <div className="mt-4 flex flex-col gap-2">
        <div className="h-4 w-4/5 bg-gray-300 dark:bg-zinc-600 rounded"></div>
        <div className="h-4 w-2/5 bg-gray-300 dark:bg-zinc-600 rounded"></div>
        <div className="h-4 w-1/5 bg-gray-300 dark:bg-zinc-600 rounded"></div>
        <div className="h-10 mt-2 w-full bg-gray-300 dark:bg-zinc-600 rounded-lg"></div>
      </div>
    </div>
  );
}