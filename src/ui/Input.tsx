import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { ErrorMessage } from './ErrorMessage';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  error?: string;
}

// Container component for input with fullWidth support
const InputContainer = styled.div<{ $fullWidth?: boolean }>`
  position: relative;
  display: ${props => props.$fullWidth ? 'block' : 'inline-block'};
  width: 100%;
`

// Styled input component with error state support
const StyledInput = styled.input<{ $hasError?: boolean }>`
  display: block;
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-black);
  background-color: var(--background);
  background-clip: padding-box;
  border: 1px solid ${props => props.$hasError ? 'var(--danger)' : 'var(--border-color)'};
  border-radius: var(--border-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  
  &::placeholder {
    color: var(--gray-500);
    opacity: 1;
  }
  
  &:focus {
    color: var(--text-black);
    background-color: var(--background);
    border-color: ${props => props.$hasError ? 'var(--danger)' : 'var(--primary)'};
  }
  
  &:disabled,
  &[readonly] {
    background-color: var(--card-background);
    opacity: 1;
  }
`

// Input component with error handling and accessibility support
export const Input = ({ fullWidth, error, id, ...props }: InputProps) => {
  const errorId = id ? `${id}-error` : undefined
  
  return (
    <InputContainer $fullWidth={fullWidth}>
      <StyledInput 
        $hasError={!!error} 
        aria-describedby={error ? errorId : undefined}
        id={id}
        {...props} 
      />
      {error && <ErrorMessage id={errorId} aria-live="assertive">{error}</ErrorMessage>}
    </InputContainer>
  )
}

Input.displayName = 'Input' 