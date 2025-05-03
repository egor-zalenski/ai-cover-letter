'use client'

import { memo } from 'react'
import styled from 'styled-components'

export const PreviewContainer = styled.div<{$overflowHidden?: boolean}>`
  color: var(--text-gray);
  white-space: pre-line;
  max-height: 534px;
  display: flex;
  flex-grow: 1;
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;

  overflow: ${props => props.$overflowHidden ? 'hidden' : 'auto'};
` 

interface LetterPreviewProps {
  content: string;
  overflowHidden?: boolean
  className?: string;
}

const LetterPreview = ({ content, overflowHidden, className }: LetterPreviewProps) => {
  return (
    <PreviewContainer $overflowHidden={overflowHidden} className={className}>
      {content}
    </PreviewContainer>
  )
}

// Memoize to prevent unnecessary re-renders
export default memo(LetterPreview) 