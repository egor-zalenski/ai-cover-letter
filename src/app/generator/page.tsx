import { Metadata } from 'next'
import { GeneratorPageLayout } from '@/app/generator/GeneratorPageLayout'
import { META, PAGE_TITLES } from '@/constants/metadata'

/**
 * New letter generator page
 * Uses the shared page layout with default form
 */
export const metadata: Metadata = {
  title: PAGE_TITLES.CREATE,
  description: META.DESCRIPTION,
}

export default function GeneratorPage() {
  return (
    <GeneratorPageLayout/>
  )
} 