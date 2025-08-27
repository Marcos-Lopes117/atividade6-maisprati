import React from 'React';
import '../../01-css-global/styles/Button.css';

interface ButtonProps {
  variant?: 'solid' | 'outline' | 'ghost';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({ variant = 'solid', children, disabled, onClick }: ButtonProps) {
  const buttonClasses = `btn btn-${variant} ${disabled ? 'btn-disabled' : ''}`;

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}