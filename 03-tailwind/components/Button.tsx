import React from 'react';

interface ButtonProps {
  variant?: 'solid' | 'outline' | 'ghost';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({ variant = 'solid', children, disabled, onClick }: ButtonProps) {
  const baseClasses = "px-5 py-2 font-bold rounded-lg transition-colors duration-200";

  const variantClasses = {
    solid: "bg-blue-600 text-white border-2 border-blue-600 hover:bg-blue-700",
    outline: "bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-50",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
  };

  const disabledClasses = "bg-gray-400 text-gray-700 border-gray-400 cursor-not-allowed opacity-60 hover:bg-gray-400";

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${disabled ? disabledClasses : ''}`;

  return (
    <button
      className={allClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}