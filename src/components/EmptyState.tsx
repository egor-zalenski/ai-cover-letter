'use client'

import React from 'react'
import styled from 'styled-components'
import { Link } from '@/ui/Link'
import { Button } from '@/ui/Button'
import { Icon } from '@/ui/Icon'
import { IconName } from '@/constants/icons'

interface EmptyStateProps {
  message: string;
  actionLabel?: string;
  actionRoute?: string;
}

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1.5rem;
  background-color: #f0f9f4;
  border-radius: 12px;
  margin: 2rem 0;
`

const Message = styled.p`
  font-size: 1.25rem;
  color: #4a4a4a;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`

const ActionButton = styled(Button)`
  background-color: #2E7D32;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  padding: 0.875rem 1.75rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  
  &:hover {
    background-color: #1B5E20;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`
// Empty state component
export const EmptyState: React.FC<EmptyStateProps> = ({
  message,
  actionLabel,
  actionRoute
}) => {
  return (
    <EmptyStateContainer>
      <Message>{message}</Message>
      
      {actionLabel && actionRoute && (
        <Link href={actionRoute}>
          <ActionButton>
            <Icon name={IconName.ADD} size={16} />
            {actionLabel}
          </ActionButton>
        </Link>
      )}
    </EmptyStateContainer>
  )
} 