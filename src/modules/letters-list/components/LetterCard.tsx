'use client'

import { memo } from 'react'
import { CoverLetter } from '@/stores/letterStore'
import { buildRoute } from '@/constants/routes'
import LetterPreview from '@/components/LetterPreview'
import DeleteConfirm from '@/components/DeleteConfirm'
import { CopyButton } from '@/components/CopyButton'
import {
  StyledCardLink,
  PreviewContainer,
  CardFooter,
  CardContainer
} from '@/ui/CardStyles'
import { formatLongName } from '@/utils/longNames'
import { MESSAGES } from '@/constants/strings'

interface LetterCardProps {
  letter: CoverLetter
  onDelete: (id: string) => void
}

// Letter card component
const LetterCard = ({ letter: { id, company, jobTitle, generatedText}, onDelete }: LetterCardProps) => {
  const handleDeleteConfirm = () => {
    onDelete(id)
  }
  
  return (
    <CardContainer>
      <StyledCardLink
        href={buildRoute.generator(id)}
        aria-label={`Edit cover letter for ${jobTitle} at ${company}`}
      >
        <PreviewContainer>
          <LetterPreview overflowHidden content={formatLongName(generatedText, 1_000)} />
        </PreviewContainer>
        
      </StyledCardLink>
      <CardFooter>
        <DeleteConfirm 
          message={MESSAGES.CONFIRM_DELETE(company)}
          ariaLabel={`Delete cover letter for ${company}`}
          onConfirm={handleDeleteConfirm}
        />
        <CopyButton text={generatedText}/>
      </CardFooter>
      </CardContainer>
  )
}

// Memoize to prevent unnecessary re-renders
export const MemoizedLetterCard = memo(LetterCard)

// Export using the original name for backward compatibility
export { MemoizedLetterCard as LetterCard } 