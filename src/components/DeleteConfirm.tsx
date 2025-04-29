'use client'

import { useCallback } from 'react'
import { EmptyButton } from '@/ui/Button'
import { Icon } from '@/ui/Icon'
import { IconName } from '@/constants/icons'
import { SIZES } from '@/constants/app'
import { styled } from 'styled-components'
import { UI_TEXT, DELETE_CONFIRM } from '@/constants/strings'

interface DeleteConfirmProps {
  message?: string;
  buttonLabel?: string;
  iconName?: IconName;
  ariaLabel?: string;
  onConfirm: () => void;
  className?: string;
}

const DeleteButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 26px;
`

// A component that uses the native window.confirm for delete confirmation
const DeleteConfirm = ({
  message = DELETE_CONFIRM.DEFAULT_MESSAGE,
  buttonLabel = UI_TEXT.BUTTON_DELETE,
  iconName = IconName.TRASH,
  ariaLabel = DELETE_CONFIRM.DEFAULT_ARIA_LABEL,
  onConfirm,
  className
}: DeleteConfirmProps) => {
  
  const handleDeleteClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Show native confirmation dialog
    const isConfirmed = window.confirm(message)
    
    // Call the onConfirm callback if user confirmed
    if (isConfirmed) {
      onConfirm()
    }
  }, [message, onConfirm])
  
  return (
    <DeleteButtonContainer>
      <EmptyButton
        type="button"
        onClick={handleDeleteClick}
        aria-label={ariaLabel}
        className={className}
      >
        <Icon name={iconName} size={SIZES.ICON_SIZE.MEDIUM} />
        {buttonLabel}
      </EmptyButton>
    </DeleteButtonContainer>
  )
}

export default DeleteConfirm 