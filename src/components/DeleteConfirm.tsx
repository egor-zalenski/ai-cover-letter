'use client'

import { useCallback } from 'react'
import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { EmptyButton } from '@/ui/Button'
import { Icon } from '@/ui/Icon'
import { IconName } from '@/constants/icons'
import { SIZES } from '@/constants/app'

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
  message,
  buttonLabel,
  iconName = IconName.TRASH,
  ariaLabel,
  onConfirm,
  className
}: DeleteConfirmProps) => {
  const { t } = useTranslation()
  
  const handleDeleteClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Show native confirmation dialog
    const isConfirmed = window.confirm(message || t('delete.confirm.default'))
    
    // Call the onConfirm callback if user confirmed
    if (isConfirmed) {
      onConfirm()
    }
  }, [message, onConfirm, t])
  
  return (
    <DeleteButtonContainer>
      <EmptyButton
        type="button"
        onClick={handleDeleteClick}
        aria-label={ariaLabel || t('delete.confirm.ariaLabel')}
        className={className}
      >
        <Icon name={iconName} size={SIZES.ICON_SIZE.MEDIUM} />
        {buttonLabel || t('ui.button.delete')}
      </EmptyButton>
    </DeleteButtonContainer>
  )
}

export default DeleteConfirm 