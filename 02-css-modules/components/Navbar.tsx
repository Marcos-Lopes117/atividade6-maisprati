import styles from '../styles/Navbar.module.css';

interface NavbarProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  cartCount: number;
  onVersionChange: (version: number) => void; // ✨ Nova prop
}

export function Navbar({ theme, onThemeToggle, cartCount, onVersionChange }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>Lojinha</div>
      <div className={styles.versionButtons}>
        <button onClick={() => onVersionChange(1)}>Css-global</button>
        <button onClick={() => onVersionChange(2)}>Css-Modules</button>
        <button onClick={() => onVersionChange(3)}>Tailwind</button>
        <button onClick={() => onVersionChange(4)}>Styled-components</button>
      </div>
      <div className={styles.navbarActions}>
        <button
          className={styles.themeToggleBtn}
          onClick={onThemeToggle}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '☀️' : '🌙'}
        </button>
        <div className={styles.cartBadge}>
          <span>🛒</span>
          {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
        </div>
      </div>
    </nav>
  );
}