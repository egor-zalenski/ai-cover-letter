'use client'

import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from '@tanstack/react-form'
import { useOpenAIMutation } from '@/hooks/useOpenAI'
import { GenerateFormData, useLetterStore } from '@/stores/letterStore'
import { letterOperations } from '@/modules/generator-form/operations'
import { notificationsService } from '@/services/notifications'
import { GENERATE_COVER_LETTER_PROMPT } from '@/constants/strings'
import { FormRenderer, FormField, ValidatorsFormData } from '@/components/FormRenderer'
import { buildRoute } from '@/constants/routes'
import { GeneratorFormProps } from './types'
import { COVER_LETTER_FORM_FIELDS } from './constants/form-fields'
import { useFormTitle } from './hooks/useFormTitle'
import { SubmitButton } from './components/SubmitButton'

export function GeneratorForm({ existingLetter }: GeneratorFormProps) {
  // Get form field configuration
  const formFields = COVER_LETTER_FORM_FIELDS
  
  // Hooks
  const router = useRouter()
  const { isLoading, setLoading } = useLetterStore()
  const openAIMutation = useOpenAIMutation({
    onSuccess: (content) => handleGenerateLetter(content),
    onError: (error) => {
      notificationsService.showError(`Failed to generate letter: ${error.message}`)
    },
    onMutate: () => setLoading(true),
    onSettled: () => setTimeout(() => setLoading(false), 2_000), // Emulate long response
  })

  // Initial form data
  const defaultValues: GenerateFormData = {
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
    const result = {} as ValidatorsFormData<GenerateFormData>

    formFields.forEach((field: FormField<GenerateFormData>) => {
      if (field.validate) {
        result[field.id] = field.validate
      }
    })
    
    return result
  }, [formFields])
  
  // Main letter generation handler
  const handleGenerateLetter = useCallback((generatedContent: string, formValues?: GenerateFormData) => {
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
      <FormRenderer<GenerateFormData>
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