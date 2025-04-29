'use client'

import React from 'react'
import styled from 'styled-components'
import { useClipboard } from '@/hooks/useClipboard'
import { Icon } from '@/ui/Icon'
import { IconName } from '@/constants/icons'
import { SIZES } from '@/constants/app'
import { UI_TEXT } from '@/constants/strings'
import { EmptyButton } from '@/ui/Button'

interface CopyButtonProps {
  text: string;
  className?: string;
  resetDelay?: number;
}

const CopyButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 26px;
`

// Copy button component
export const CopyButton: React.FC<CopyButtonProps> = ({ 
  text, 
  className, 
  resetDelay = 2000,
}) => {
  const { isCopied, copyToClipboard } = useClipboard()
  
  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    copyToClipboard(text, resetDelay)
  }
  
  return (
    <CopyButtonContainer>
      <EmptyButton 
        type="button"
        onClick={handleCopy}
        className={className}
        aria-label="Copy content to clipboard"
      >
        {UI_TEXT.BUTTON_COPY}
        <Icon name={isCopied ? IconName.SUCCESS : IconName.COPY} size={SIZES.ICON_SIZE.MEDIUM} />
      </EmptyButton>
    </CopyButtonContainer>
  )
} 