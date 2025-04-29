'use client'

import { CopyButton } from '@/components/CopyButton'
import LetterPreview from '@/components/LetterPreview'
import { 
  ContentContainer, 
  ResultContainer 
} from '@/ui/Content'
import { CoverLetter, useLetterStore } from '@/stores/letterStore'
import { LoadingState } from './components/LoadingState'
import { PLACEHOLDERS } from '@/constants/strings'

export interface OpenAIResultProps {
  letter?: CoverLetter
}

// OpenAI result component
export function OpenAIResult({ letter }: OpenAIResultProps) {
  const { isLoading } = useLetterStore()

  if(isLoading) {
    return <LoadingState />
  }

  return (
    <ResultContainer>
      <ContentContainer>
        <LetterPreview content={letter?.generatedText || PLACEHOLDERS.LETTER_PREVIEW} />
        {letter?.generatedText && (
          <CopyButton text={letter?.generatedText} />
        )}
      </ContentContainer>
    </ResultContainer>
  )
}
