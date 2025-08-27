import React from 'React';
interface NavbarProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  cartCount: number;
  onVersionChange: (version: number) => void;
}

export function Navbar({ theme, onThemeToggle, cartCount, onVersionChange }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-6 bg-gray-100 dark:bg-zinc-900 shadow-md dark:shadow-xl transition-colors duration-300">
      <div className="text-2xl font-bold text-zinc-900 dark:text-gray-100">Lojinha</div>
      <div className="flex gap-4">
      <button
          className="py-2 px-4 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-100 dark:hover:bg-zinc-700 text-zinc-900 dark:text-gray-100"
          onClick={() => onVersionChange(1)}>
          CSS Global
        </button>
        <button
          className="py-2 px-4 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-100 dark:hover:bg-zinc-700 text-zinc-900 dark:text-gray-100"
          onClick={() => onVersionChange(2)}>
          CSS Modules
        </button>
        <button
          className="py-2 px-4 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-100 dark:hover:bg-zinc-700 text-zinc-900 dark:text-gray-100"
          onClick={() => onVersionChange(3)}>
          Tailwind
        </button>
        <button
          className="py-2 px-4 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-100 dark:hover:bg-zinc-700 text-zinc-900 dark:text-gray-100"
          onClick={() => onVersionChange(4)}>
          Styled-components
        </button>
        </div>
      <div className="flex items-center gap-6">
        <button
          className="text-2xl transition-transform hover:scale-110"
          onClick={onThemeToggle}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '☀️' : '🌙'}
        </button>
        <div className="relative text-2xl">
          <span>🛒</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-medium px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}