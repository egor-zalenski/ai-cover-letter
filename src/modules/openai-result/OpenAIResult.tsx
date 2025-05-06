'use client'

import { useTranslation } from 'react-i18next'
import { CopyButton } from '@/components/CopyButton'
import LetterPreview from '@/components/LetterPreview'
import { 
  ContentContainer, 
  ResultContainer 
} from '@/ui/Content'
import { CoverLetter, useLetterStore } from '@/stores/letterStore'
import { LoadingState } from './components/LoadingState'

export interface OpenAIResultProps {
  letter?: CoverLetter
}

// OpenAI result component
export function OpenAIResult({ letter }: OpenAIResultProps) {
  const { t } = useTranslation()
  const { isLoading } = useLetterStore()

  if(isLoading) {
    return <LoadingState />
  }

  return (
    <ResultContainer>
      <ContentContainer>
        <LetterPreview content={letter?.generatedText || t('form.placeholders.letterPreview')} />
        {letter?.generatedText && (
          <CopyButton text={letter?.generatedText} />
        )}
      </ContentContainer>
    </ResultContainer>
  )
}
