'use client'

import { useEffect, useState } from 'react'
import { Header } from '@/components/Header'
import { FlexColumn, FlexRow, PageContainer } from '@/ui/Layout'
import { PageTitle } from '@/ui/Title'
import { GeneratorForm } from '@/modules/generator-form/GeneratorForm'
import { GeneratorFormProps } from '@/modules/generator-form/types'
import { OpenAIResult } from '@/modules/openai-result/OpenAIResult'
import { GoalBanner } from '@/components/GoalBanner'
import { usePageTitleStore } from '@/stores/pageTitleStore'
import { PAGE_TITLES } from '@/constants/strings'
import { Separator } from '@/ui/Separator'

/**
 * Shared layout component for letter generator pages
 * Used by both new letter and edit letter pages
 */
export function GeneratorPageLayout({ existingLetter }: GeneratorFormProps) {

  const [mounted, setMounted] = useState(false)

  const { setTitle } = usePageTitleStore()

  useEffect(() => {
    setMounted(true)
    if (!existingLetter) {
      setTitle(PAGE_TITLES.CREATE)
    }
  }, [existingLetter, setMounted, setTitle])

  if (!mounted) return null

  return (
    <>
      <Header />
      <PageContainer>
        <FlexRow>
          <FlexColumn>
            <PageTitle />
            <Separator />
            <GeneratorForm existingLetter={existingLetter} />
          </FlexColumn>
          <FlexColumn>
            <OpenAIResult letter={existingLetter} />
          </FlexColumn>
        </FlexRow>
        {!!existingLetter && <GoalBanner />}
      </PageContainer>
    </>
  )
} 