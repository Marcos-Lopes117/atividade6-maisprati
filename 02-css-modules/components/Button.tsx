import React from 'react';
import styles from '../styles/Button.module.css';

interface ButtonProps {
  variant?: 'solid' | 'outline' | 'ghost';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({ variant = 'solid', children, disabled, onClick }: ButtonProps) {
  // Constrói um array de classes para facilitar a concatenação.
  const classes = [styles.btn];

  // Adiciona a classe da variante com base na prop 'variant'.
  // Para usar esta lógica, as classes no seu CSS devem ser camelCase (ex: btnSolid, btnOutline).
  if (variant === 'solid') {
    classes.push(styles.btnSolid);
  } else if (variant === 'outline') {
    classes.push(styles.btnOutline);
  } else if (variant === 'ghost') {
    classes.push(styles.btnGhost);
  }

  // Adiciona a classe 'disabled' se a prop 'disabled' for verdadeira.
  if (disabled) {
    classes.push(styles.btnDisabled);
  }

  return (
    <button
      // Junta todas as classes do array em uma única string.
      className={classes.join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}