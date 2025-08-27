import { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { ProductCard } from './ProductCard';
import { Skeleton } from './Skeleton';
import { products } from '../../src/data/products';
import type { Product } from '../../src/types/product';
import styles from '../styles/Lojinha.module.css';

// Adicione a tipagem para a prop
interface LojinhaProps {
  onVersionChange: (version: number) => void;
}

// Hook para gerenciar o tema com persistência
const useDarkMode = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const localTheme = localStorage.getItem('theme');
    return localTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme] as const;
};

// Adicione a prop ao componente
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
    setCartCount(prevCount => prevCount + 1);
  };

  const renderProducts = (items: Product[]) => {
    return items.map(product => (
      <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
    ));
  };

  return (
    <div className={styles.lojinhaContainer}>
      {/* Passe a prop para o Navbar */}
      <Navbar theme={theme} onThemeToggle={toggleTheme} cartCount={cartCount} onVersionChange={onVersionChange} />
      <main className={styles.productGrid}>
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
          : renderProducts(products)}
      </main>
    </div>
  );
}