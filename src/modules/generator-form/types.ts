import { CoverLetter, GeneratorFormData } from '@/stores/letterStore'

export interface GeneratorFormProps {
  existingLetter?: CoverLetter
}

// Interface for validation errors matching form fields
export type ValidationErrors = Partial<Record<keyof GeneratorFormData, string>>;