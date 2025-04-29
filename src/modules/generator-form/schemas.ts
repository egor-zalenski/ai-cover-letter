// Zod schemas for letter generation data validation
import { z } from 'zod'

// Schema for letter form data
export const letterFormSchema = z.object({
  company: z.string().min(1, { message: "Company name is required" }),
  jobTitle: z.string().min(1, { message: "Job title is required" }),
  skillsList: z.string().optional(),
  additionalDetails: z.string().optional(),
})

// Infer TypeScript types from Zod schemas
export type LetterFormData = z.infer<typeof letterFormSchema>

// Utility function to validate letter form data
export function validateLetterForm(data: unknown): {
  success: boolean;
  data?: LetterFormData;
  error?: z.ZodError;
} {
  try {
    const result = letterFormSchema.parse(data)
    return { success: true, data: result }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error }
    }
    throw error
  }
}

// Format Zod validation errors into a user-friendly object
export function formatValidationErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {}
  
  error.errors.forEach((err) => {
    if (err.path.length > 0) {
      const fieldName = err.path.join('.')
      errors[fieldName] = err.message
    }
  })
  
  return errors
} 