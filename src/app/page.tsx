'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/Header'
import { PageContainer } from '@/ui/Layout'
import { PageTitle } from '@/ui/Title'
import { LettersList } from '@/modules/letters-list/LettersList'
import { GoalBanner } from '@/components/GoalBanner'
import { usePageTitleStore } from '@/stores/pageTitleStore'
import { PAGE_TITLES } from '@/constants/metadata'
import { CreateButton } from '@/ui/CreateButton'
import { Separator } from '@/ui/Separator'

// Main homepage component with letters list and goal banner
export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  const { setTitle } = usePageTitleStore()

  useEffect(() => {
    setMounted(true)
    setTitle(PAGE_TITLES.MAIN)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Header />
      <PageContainer>
        <PageTitle homePage>
          <CreateButton small/>
        </PageTitle>
        <Separator />
        <LettersList />
        <GoalBanner/>
      </PageContainer>
    </>
  )
}
