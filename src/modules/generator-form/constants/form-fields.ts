import { VALIDATION_MESSAGES, VALIDATION_RULES } from '@/constants/validation'
import { FormField } from '@/components/FormRenderer'
import { GenerateFormData } from '@/stores/letterStore'
import { FORM_LABELS, PLACEHOLDERS } from '@/constants/strings'

/**
 * Configuration for cover letter generator form fields
 */
export const COVER_LETTER_FORM_FIELDS: FormField<GenerateFormData>[] = [
  {
    id: 'jobTitle',
    label: FORM_LABELS.JOB_TITLE,
    placeholder: PLACEHOLDERS.JOB_TITLE,
    autoFocus: true,
    required: true,
    inputType: 'text',
    validate: ({ value }) => {
      const stringValue = String(value || '')
      if (!stringValue.trim()) {
        return VALIDATION_MESSAGES.REQUIRED.JOB_TITLE
      } else if (stringValue.length < VALIDATION_RULES.MIN_LENGTH.JOB_TITLE) {
        return VALIDATION_MESSAGES.MIN_LENGTH.JOB_TITLE
      } else if (stringValue.length > VALIDATION_RULES.MAX_LENGTH.JOB_TITLE) {
        return VALIDATION_MESSAGES.MAX_LENGTH.JOB_TITLE
      }
      return undefined
    }
  },
  {
    id: 'company',
    label: FORM_LABELS.COMPANY,
    placeholder: PLACEHOLDERS.COMPANY,
    required: true,
    inputType: 'text',
    validate: ({ value }) => {
      const stringValue = String(value || '')
      if (!stringValue.trim()) {
        return VALIDATION_MESSAGES.REQUIRED.COMPANY
      } else if (stringValue.length < VALIDATION_RULES.MIN_LENGTH.COMPANY) {
        return VALIDATION_MESSAGES.MIN_LENGTH.COMPANY
      } else if (stringValue.length > VALIDATION_RULES.MAX_LENGTH.COMPANY) {
        return VALIDATION_MESSAGES.MAX_LENGTH.COMPANY
      }
      return undefined
    }
  },
  {
    id: 'skillsList',
    label: FORM_LABELS.SKILLS,
    placeholder: PLACEHOLDERS.SKILLS,
    required: true,
    fullWidth: true,
    inputType: 'text',
    validate: ({ value }) => {
      const stringValue = String(value || '')
      if (!stringValue.trim()) {
        return VALIDATION_MESSAGES.REQUIRED.SKILLS
      } else if (stringValue.length < VALIDATION_RULES.MIN_LENGTH.SKILLS) {
        return VALIDATION_MESSAGES.MIN_LENGTH.SKILLS
      } else if (stringValue.length > VALIDATION_RULES.MAX_LENGTH.SKILLS) {
        return VALIDATION_MESSAGES.MAX_LENGTH.SKILLS
      }
      return undefined
    }
  },
  {
    id: 'additionalDetails',
    label: FORM_LABELS.ADDITIONAL_DETAILS,
    placeholder: PLACEHOLDERS.ADDITIONAL_DETAILS,
    inputType: 'textarea',
    fullWidth: true,
    rows: 5,
    validate: ({ value }) => {
      const stringValue = String(value || '')
      if (stringValue.length > VALIDATION_RULES.MAX_LENGTH.DETAILS) {
        return VALIDATION_MESSAGES.MAX_LENGTH.DETAILS
      }
      return undefined
    }
  }
]
