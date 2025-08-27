import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle} from 'styled-components';
import type { DefaultTheme } from 'styled-components';
import { Navbar } from './Navbar';
import { ProductCard } from './ProductCard';
import { Skeleton } from './Skeleton';
import { products } from '../../src/data/products';
import type { Product } from '../../src/types/product';
import 'styled-components';

interface LojinhaProps {
  onVersionChange: (version: number) => void;
}


const lightTheme: DefaultTheme = {
  body: '#f4f6f8',
  text: '#212529',
  cardBackground: 'white',
  cardBorder: '#e0e0e0',
  cardShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  priceColor: '#007bff',
  tagColor: '#28a745',
  tagTextColor: 'white',
  skeletonBg: '#f6f7f8',
  skeletonLine: '#ccc',
  navBackground: '#f8f9fa',
  navText: '#212529',
  navShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  buttonSolidBg: '#007bff',
  buttonSolidText: 'white',
  buttonOutlineBg: 'transparent',
  buttonOutlineText: '#007bff',
  buttonGhostBg: 'transparent',
  buttonGhostText: '#007bff',
  buttonHoverBg: 'rgba(0, 123, 255, 0.1)',
};

const darkTheme: DefaultTheme = {
  body: '#1a1a1a',
  text: '#e9ecef',
  cardBackground: '#343a40',
  cardBorder: '#495057',
  cardShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  priceColor: '#92d4ff',
  tagColor: '#498528',
  tagTextColor: 'white',
  skeletonBg: '#333',
  skeletonLine: '#555',
  navBackground: '#212529',
  navText: '#f8f9fa',
  navShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
  buttonSolidBg: '#0056b3',
  buttonSolidText: 'white',
  buttonOutlineBg: 'transparent',
  buttonOutlineText: '#92d4ff',
  buttonGhostBg: 'transparent',
  buttonGhostText: '#92d4ff',
  buttonHoverBg: 'rgba(146, 212, 255, 0.1)',
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s, color 0.3s;
  }
`;

const useDarkMode = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const localTheme = localStorage.getItem('theme');
    return localTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme] as const;
};

const MainContainer = styled.div`
  padding: 0;
  margin: 0;
  min-height: 100vh;
`;

const ProductGrid = styled.main`
  display: grid;
  gap: 24px;
  padding: 24px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

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

  const renderProducts = (items: Product[]) => {
    return items.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        onAddToCart={handleAddToCart}
      />
    ));
  };

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <MainContainer>
        <Navbar
          theme={theme}
          onThemeToggle={toggleTheme}
          cartCount={cartCount}
          onVersionChange={onVersionChange}
        />
        <ProductGrid>
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
            : renderProducts(products)}
        </ProductGrid>
      </MainContainer>
    </ThemeProvider>
  );
}