import React, { ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: React.ReactNode;
  as?: React.ElementType;
  href?: string;
}

// Disabled state mixin (used by all variants)
const disabledStateMixin = css`
  opacity: var(--disabled-opacity);
  cursor: not-allowed;
  color: var(--text-disabled);
  background-color: var(--disabled-color);
`

// Enhanced disabled state for specialized buttons
const enhancedDisabledMixin = css`
  &:disabled {
    ${disabledStateMixin}
    filter: grayscale(30%);
  }
`

// ===== COMPONENT STYLES =====

// Base styled button component with variant and fullWidth props
export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $fullWidth?: boolean;
}>`
  color: var(--text);
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-color);
  gap: 4px;
  cursor: pointer;

  transition: transform 0.1s ease;
  
  &:not(:disabled):hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

// Base button component with variant and fullWidth support
export const Button = ({ 
  variant = 'primary', 
  fullWidth, 
  children, 
  as, 
  ...props 
}: ButtonProps) => {
  return (
    <StyledButton
      as={as}
      $variant={variant}
      $fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

Button.displayName = 'Button' 

/**
 * ActionButton - A primary button with icon support
 * Used for main actions like create, submit, etc.
 */
export const ActionButton = styled(Button)<{$isWhite?: boolean}>`
  background-color: ${props => props.$isWhite ? 'white' : 'var(--secondary)'};
  color: ${props => props.$isWhite ? 'var(--text-dark)' : 'var(--text)'};
  border: ${props => !props.$isWhite && 'none'};
  /* border: none; */
  height: 60px;
  font-weight: 600;
  font-size: 18px;

  gap: 10px;

  ${enhancedDisabledMixin}
`

// Empty button variant with no background or border
export const EmptyButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-button-gray);
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
`