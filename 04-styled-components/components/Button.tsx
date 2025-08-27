// 04-styled-components/components/Button.tsx

import React from 'react';
import styled, { css } from 'styled-components';

// 1. Tipagem corrigida: informe ao componente que ele pode receber as props de ButtonProps
const StyledButton = styled.button<{ variant: 'solid' | 'outline' | 'ghost'; disabled?: boolean; }>`
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }

  ${(props) => props.disabled && css`
    cursor: not-allowed;
    opacity: 0.6;
    background-color: #cccccc;
    color: #666666;
    border-color: #cccccc;
    &:hover {
      background-color: #cccccc;
      color: #666666;
      box-shadow: none;
    }
  `}

  ${(props) => props.variant === 'solid' && css`
    background-color: #007bff;
    color: white;
    border: 1px solid transparent;
    &:hover {
      background-color: #0056b3;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  `}

  ${(props) => props.variant === 'outline' && css`
    background-color: transparent;
    color: #007bff;
    border: 1px solid #007bff;
    &:hover {
      background-color: #007bff;
      color: white;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  `}

  ${(props) => props.variant === 'ghost' && css`
    background-color: transparent;
    color: #007bff;
    border: 1px solid transparent;
    &:hover {
      background-color: rgba(0, 123, 255, 0.1);
      box-shadow: none;
    }
  `}
`;

interface ButtonProps {
  variant?: 'solid' | 'outline' | 'ghost';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({ variant = 'solid', children, disabled, onClick }: ButtonProps) {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}