import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { ProductCard } from './ProductCard';
import { Skeleton } from './Skeleton';
import { products } from '../../src/data/products';
import '../style/index.css'


interface LojinhaProps {
  onVersionChange: (version: number) => void;
}

const useDarkMode = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const localTheme = localStorage.getItem('theme');
    return localTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark'); // Classe "dark" para o Tailwind
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme] as const;
};

export function Lojinha({ onVersionChange }: LojinhaProps) {
  const [theme, toggleTheme] = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="bg-gray-100 dark:bg-zinc-900 min-h-screen transition-colors duration-300">
      <Navbar
        theme={theme}
        onThemeToggle={toggleTheme}
        cartCount={cartCount}
        onVersionChange={onVersionChange}
      />
      <main className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
          : products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
      </main>
    </div>
  );
}