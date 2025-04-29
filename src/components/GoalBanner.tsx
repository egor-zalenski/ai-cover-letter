'use client'

import styled from 'styled-components'
import { memo } from 'react'
import { CreateButton } from '@/ui/CreateButton'
import { TARGET_LETTER_COUNT } from '@/constants/app'
import { useLetterStore } from '@/stores/letterStore'
import { ProgressSquares, ProgressSquare } from '@/ui/Progress'
import { GOAL } from '@/constants/strings'

const BannerContainer = styled.div`
  background-color: var(--secondary-light);
  border-radius: 12px;
  padding: 54px 64px;
  margin: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const BannerTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 1rem;
`

const BannerDescription = styled.p`
  color: var(--text-gray);
  max-width: 480px;
  line-height: 28px;
  font-size: 1.125rem;
  margin-bottom: 16px;
  max-width: 600px;
`

const ProgressText = styled.div`
  font-size: 1rem;
  color: var(--text-gray);
  margin-top: 0.5rem;
`

// Goal banner component
export const GoalBanner = memo(() => {
  const { letters } = useLetterStore()
  const letterCount = letters.length

  if (letterCount >= TARGET_LETTER_COUNT) {
    return null
  }
  
  return (
    <BannerContainer>
      <BannerTitle>{GOAL.TITLE}</BannerTitle>
      <BannerDescription>
        {GOAL.DESCRIPTION}
      </BannerDescription>
      <CreateButton />

      <ProgressSquares>
        {Array.from({ length: TARGET_LETTER_COUNT }).map((_, i) => (
          <ProgressSquare key={i} $active={i < letterCount} />
        ))}
      </ProgressSquares>
      <ProgressText>{GOAL.PROGRESS(letterCount, TARGET_LETTER_COUNT)}</ProgressText>
      
    </BannerContainer>
  )
})

// Add display name for debugging
GoalBanner.displayName = 'GoalBanner' 