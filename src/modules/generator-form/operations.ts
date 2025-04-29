/**
 * Cover letter generation and management operations
 * This module contains functions for letter validation, generation, and management
 * It serves as a bridge between UI components and the letterStore
 */

import { useLetterStore, type GenerateFormData, type CoverLetter, type LetterFields } from '@/stores/letterStore'
import { notificationsService } from '@/services/notifications'
import { 
  validateLetterForm, 
  formatValidationErrors,
  letterFormSchema,
} from './schemas'
import { ValidationErrors } from './types'
import { Maybe, Nullable } from '@/interfaces/types'

// Validate letter form data with different output formats
export const validateLetter = {
  // Get detailed validation errors for form data
  getErrors(formData: unknown): Maybe<ValidationErrors> {
    const result = validateLetterForm(formData)
    
    if (!result.success && result.error) {
      return formatValidationErrors(result.error) as ValidationErrors
    }
    
    return undefined
  },

  // Get a single error message from form validation
  getErrorMessage(formData: GenerateFormData): Maybe<string> {
    try {
      letterFormSchema.parse(formData)
      return undefined
    } catch (error) {
      const errors = this.getErrors(formData)
      if (errors) {
        const firstError = Object.values(errors).find(Boolean)
        return firstError || 'Validation failed'
      }
      
      return error instanceof Error ? error.message : 'Validation failed'
    }
  }
}

// Letter management operations including create, update and generate
export const letterOperations = {
  // Toggle loading state and handle errors
  setLoading(isLoading: boolean): void {
    useLetterStore.getState().setLoading(isLoading)
  },

  // Handle error with notification and loading state reset
  handleError(errorMessage: string): void {
    this.setLoading(false)
    notificationsService.showError(errorMessage)
  },

  // Create a new letter from form data and content
  createLetter(formData: GenerateFormData, generatedContent: string): CoverLetter {
    const letterContent: LetterFields = {
      ...structuredClone(formData),
      generatedText: generatedContent,
    }
    
    const newLetter = useLetterStore.getState().addLetter(letterContent)
    return newLetter
  },

  // Update an existing letter with new data
  updateLetter(letterId: string, formData: GenerateFormData, generatedContent: string): Nullable<CoverLetter> {
    const letterContent: LetterFields = {
      ...structuredClone(formData),
      generatedText: generatedContent,
    }
    
    const updatedLetter = useLetterStore.getState().updateLetter(letterId, letterContent)

    return updatedLetter
  },

  // Generate a cover letter with AI content
  generateWithAI(
    formData: GenerateFormData, 
    generatedContent: string, 
    existingLetterId?: string
  ): Nullable<CoverLetter> {
    this.setLoading(true)
    
    try {
      // Validate input data
      const validationError = validateLetter.getErrorMessage(formData)
      if (validationError) {
        this.handleError(validationError)
        return null
      }
      
      if (!generatedContent?.trim()) {
        this.handleError('Generated content is required')
        return null
      }
      
      // Process letter (create or update)
      const letter = existingLetterId
        ? this.updateLetter(existingLetterId, formData, generatedContent)
        : this.createLetter(formData, generatedContent)
      
      if (letter) {
        this.setLoading(false)
      }
      
      return letter
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
      this.handleError(errorMessage)
      return null
    }
  }
}