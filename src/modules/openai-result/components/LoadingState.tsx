'use client'

import Image from 'next/image'
import { ContentContainer, ResultContainer } from '@/ui/Content'
import { LoadingBallsContainer } from '@/ui/Feedback'

// Loading state component
export const LoadingState = () => {
  return (
    <ResultContainer>
        <ContentContainer>
          <LoadingBallsContainer>
            <Image src="/icons/loading_ball.svg" alt="Loading ball" width={80} height={80} />
          </LoadingBallsContainer>
        </ContentContainer>
    </ResultContainer>
  )
} 