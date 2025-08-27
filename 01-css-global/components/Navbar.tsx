import '../styles/Navbar.css';
import React from 'React';
interface NavbarProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  cartCount: number;
  onVersionChange: (version: number) => void; // ✨ Nova prop
}

export function Navbar({ theme, onThemeToggle, cartCount, onVersionChange }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Lojinha</div>
      <div className="version-buttons">
        <button onClick={() => onVersionChange(1)}>Css-global</button>
        <button onClick={() => onVersionChange(2)}>Css-Modules</button>
        <button onClick={() => onVersionChange(3)}>Tailwind</button>
        <button onClick={() => onVersionChange(4)}>Styled-components</button>
      </div>
      <div className="navbar-actions">
        <button
          className="theme-toggle-btn"
          onClick={onThemeToggle}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '☀️' : '🌙'}
        </button>
        <div className="cart-badge">
          <span>🛒</span>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </div>
    </nav>
  );
}