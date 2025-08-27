import styled from 'styled-components';
import React from 'React';
declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    cardBackground: string;
    cardBorder: string;
    cardShadow: string;
    priceColor: string;
    tagColor: string;
    tagTextColor: string;
    skeletonBg: string;
    skeletonLine: string;
    navBackground: string;
    navText: string;
    navShadow: string;
    buttonSolidBg: string;
    buttonSolidText: string;
    buttonOutlineBg: string;
    buttonOutlineText: string;
    buttonGhostBg: string;
    buttonGhostText: string;
    buttonHoverBg: string;
  }
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.navBackground};
  color: ${(props) => props.theme.navText};
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: ${(props) => props.theme.navShadow};
  transition: all 0.3s;
`;

const NavLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const VersionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const VersionButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.cardBorder};
  background-color: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.text};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.cardBorder};
  }
`;

const ThemeToggleBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s;
  color: ${(props) => props.theme.navText};
  &:hover {
    transform: scale(1.1);
  }
`;

const CartBadge = styled.div`
  position: relative;
  font-size: 1.5rem;
  cursor: pointer;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 0.8rem;
  padding: 2px 6px;
  border-radius: 50%;
`;

interface NavbarProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  cartCount: number;
  onVersionChange: (version: number) => void;
}

export function Navbar({ theme, onThemeToggle, cartCount, onVersionChange }: NavbarProps) {
  return (
    <NavContainer>
      <NavLogo>Lojinha</NavLogo>
      <VersionButtons>
        <VersionButton onClick={() => onVersionChange(1)}>Css-Global</VersionButton>
        <VersionButton onClick={() => onVersionChange(2)}>Css-modules</VersionButton>
        <VersionButton onClick={() => onVersionChange(3)}>Tailwind</VersionButton>
        <VersionButton onClick={() => onVersionChange(4)}>Styled-components</VersionButton>
      </VersionButtons>
      <NavActions>
        <ThemeToggleBtn onClick={onThemeToggle} aria-label="Toggle theme">
          {theme === 'light' ? '☀️' : '🌙'}
        </ThemeToggleBtn>
        <CartBadge>
          <span>🛒</span>
          {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
        </CartBadge>
      </NavActions>
    </NavContainer>
  );
}