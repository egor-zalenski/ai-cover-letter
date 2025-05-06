import { useEffect } from 'react'
import { useField } from '@tanstack/react-form'
import { PAGE_TITLES } from '@/constants/metadata'
import { usePageTitleStore } from '@/stores/pageTitleStore'
import { formatLongName } from '@/utils/longNames'
import { GeneratorFormData } from '@/stores/letterStore'
import { FormType } from '@/interfaces/forms'

// Hook to set the page title based on the form values
export const useFormTitle = (form: FormType<GeneratorFormData>) => {
  const { setTitle } = usePageTitleStore()
  const { state: { value: companyName } } = useField({ form, name: 'company' })
  const { state: { value: jobTitle } } = useField({ form, name: 'jobTitle' })

  useEffect(() => {
    const newTitle = jobTitle && companyName
      ? formatLongName(`${jobTitle}, ${companyName}`, 100)
      : PAGE_TITLES.CREATE
    
    setTitle(newTitle)
  }, [jobTitle, companyName, setTitle])
}
