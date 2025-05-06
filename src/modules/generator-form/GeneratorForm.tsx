'use client'

import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from '@tanstack/react-form'
import { useOpenAIMutation } from '@/hooks/useOpenAI'
import { GeneratorFormData, useLetterStore } from '@/stores/letterStore'
import { letterOperations } from '@/modules/generator-form/operations'
import { showNotificationError } from '@/utils/notifications'
import { FormRenderer } from '@/components/FormRenderer'
import { buildRoute } from '@/constants/routes'
import { FormField, ValidatorsFormData } from '@/interfaces/forms'
import { GeneratorFormProps } from './types'
import { useFormFields } from './hooks/useFormFields'
import { useFormTitle } from './hooks/useFormTitle'
import { GENERATE_COVER_LETTER_PROMPT } from './constants'
import { SubmitButton } from './components/SubmitButton'

export function GeneratorForm({ existingLetter }: GeneratorFormProps) {
  
  // Hooks
  const router = useRouter()
  // Get form field configuration
  const formFields = useFormFields()
  const { isLoading, setLoading } = useLetterStore()
  const openAIMutation = useOpenAIMutation({
    onSuccess: (content) => handleGenerateLetter(content),
    onError: (error) => {
      showNotificationError(`Failed to generate letter: ${error.message}`)
    },
    onMutate: () => setLoading(true),
    onSettled: () => setTimeout(() => setLoading(false), 2_000), // Emulate long response
  })

  // Initial form data
  const defaultValues: GeneratorFormData = {
    company: existingLetter?.company || '',
    jobTitle: existingLetter?.jobTitle || '',
    skillsList: existingLetter?.skillsList || '',
    additionalDetails: existingLetter?.additionalDetails || '',
  }
  
  // Initialize form
  const form = useForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      // Use OpenAI for generating the letter
      const prompt = GENERATE_COVER_LETTER_PROMPT(value)
      openAIMutation.mutate(prompt)
    },
  })

  // Use the custom hook for form title management
  useFormTitle(form)
  
  // Create field validators for form
  const validators = useMemo(() => {
    const result = {} as ValidatorsFormData<GeneratorFormData>

    formFields.forEach((field: FormField<GeneratorFormData>) => {
      if (field.validate) {
        result[field.id] = field.validate
      }
    })
    
    return result
  }, [formFields])

  // Main letter generation handler
  const handleGenerateLetter = useCallback((generatedContent: string, formValues?: GeneratorFormData) => {
    const values = formValues || form.state.values
    const letter = letterOperations.generateWithAI(values, generatedContent, existingLetter?.id)

    if (!existingLetter?.id) {
      router.push(buildRoute.generator(letter?.id))
    }
  }, [form.state.values, existingLetter])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
    >
      <FormRenderer<GeneratorFormData>
        form={form}
        formFields={formFields}
        validators={validators}
      />

      <SubmitButton
        form={form}
        isGenerated={!!existingLetter}
        isLoading={isLoading}
      />  
    </form>
  )
} 