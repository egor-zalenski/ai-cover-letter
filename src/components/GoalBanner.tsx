'use client'

import styled from 'styled-components'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { CreateButton } from '@/ui/CreateButton'
import { TARGET_LETTER_COUNT } from '@/constants/app'
import { useLetterStore } from '@/stores/letterStore'
import { ProgressSquares, ProgressSquare } from '@/ui/Progress'

const BannerContainer = styled.div`
  background-color: var(--secondary-light);
  border-radius: 12px;
  padding: 55.5px 64px;
  margin: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const BannerTitle = styled.h3`
  font-size: 36px;
  font-weight: 600;
  color: var(--text-black);
  font-family: var(--font-fixel-display);
  margin: 0 0 15.5px;
  letter-spacing: -0.7px;
`

const BannerDescription = styled.p`
  color: var(--text-gray);
  max-width: 480px;
  line-height: 28px;
  font-size: 18px;
  margin-bottom: 16px;
`

const ProgressText = styled.div`
  font-size: 18px;
  color: var(--text-gray);
  margin-top: 8px;
  line-height: 28px;
`

// Goal banner component
export const GoalBanner = memo(() => {
  const { t } = useTranslation()
  const { letters } = useLetterStore()
  const letterCount = letters.length

  if (letterCount >= TARGET_LETTER_COUNT) {
    return null
  }
  
  return (
    <BannerContainer>
      <BannerTitle>{t('goal.title')}</BannerTitle>
      <BannerDescription>
        {t('goal.description')}
      </BannerDescription>
      <CreateButton />

      <ProgressSquares>
        {Array.from({ length: TARGET_LETTER_COUNT }).map((_, i) => (
          <ProgressSquare key={i} $active={i < letterCount} />
        ))}
      </ProgressSquares>
      <ProgressText>{t('goal.progress', { current: letterCount, target: TARGET_LETTER_COUNT })}</ProgressText>
      
    </BannerContainer>
  )
})

// Add display name for debugging
GoalBanner.displayName = 'GoalBanner' 