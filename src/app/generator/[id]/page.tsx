'use client'

import React, { use } from 'react'
import { GeneratorPageLayout } from '@/app/generator/GeneratorPageLayout'
import { useLetterById } from '@/hooks/useLetterById'
import { LoadingState } from '@/components/LoadingState'

interface EditPageProps {
  params: Promise<Record<'id', string>>
}

// Edit letter page
export default function EditGeneratorPage({ params }: EditPageProps) {
  const { id } = use(params)

  // Use the hook with navigation callbacks
  const { letter, isLoading } = useLetterById(id)
  
  // Show loading state while fetching the letter
  if (isLoading) {
    return <LoadingState />
  }
  
  return (
    <GeneratorPageLayout existingLetter={letter!} />
  )
} 