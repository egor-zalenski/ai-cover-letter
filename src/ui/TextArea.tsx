import React, { TextareaHTMLAttributes } from 'react'
import styled from 'styled-components'
import { ErrorMessage } from './ErrorMessage';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  fullWidth?: boolean;
  error?: string;
  rows?: number;
  id?: string;
}

const TextAreaContainer = styled.div<{ $fullWidth?: boolean }>`
  position: relative;
  display: ${props => props.$fullWidth ? 'block' : 'inline-block'};
  width: 100%;
`

const StyledTextArea = styled.textarea<{ $hasError?: boolean }>`
  display: block;
  width: 100%;
  padding: 8px 12px;
  height: 236px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-black);
  background-color: var(--background);
  background-clip: padding-box;
  border: 1px solid ${props => props.$hasError ? 'var(--danger)' : 'var(--border-color)'};
  border-radius: var(--border-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  resize: none;
  
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
// TextArea component with error handling and accessibility support
export const TextArea = ({ fullWidth, error, rows = 4, id, ...props }: TextAreaProps) => {
  const errorId = id ? `${id}-error` : undefined
  
  return (
    <TextAreaContainer $fullWidth={fullWidth}>
      <StyledTextArea 
        rows={rows} 
        $hasError={!!error} 
        id={id} 
        aria-describedby={errorId}
        {...props} 
      />
      {error && <ErrorMessage id={errorId} aria-live="assertive">{error}</ErrorMessage>}
    </TextAreaContainer>
  )
}

TextArea.displayName = 'TextArea' 