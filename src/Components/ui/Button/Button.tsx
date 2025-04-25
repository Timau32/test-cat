import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: 'primary' | 'secondary' | 'danger';
  $size?: 'small' | 'medium' | 'large';
  $fullWidth?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: ${({ $size }) => 
    $size === 'large' ? '12px 24px' : 
    $size === 'small' ? '6px 12px' : '8px 16px'};
  font-size: ${({ $size }) => 
    $size === 'large' ? '16px' : 
    $size === 'small' ? '12px' : '14px'};
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};

  background-color: ${({ $variant, theme }) => 
    $variant === 'secondary' ? theme.colors.secondary : 
    $variant === 'danger' ? theme.colors.danger : 
    theme.colors.primary};
  color: ${({ $variant, theme }) => 
    $variant === 'secondary' ? theme.colors.text : 
    theme.colors.white};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    margin-right: 8px;
  }
`;

const Button: React.FC<ButtonProps> = ({ 
  children, 
  $variant = 'primary',
  $size = 'medium',
  $fullWidth = false,
  ...props 
}) => {
  return (
    <StyledButton 
      $variant={$variant}
      $size={$size}
      $fullWidth={$fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;