import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'
import { VALIDATION_MESSAGES, VALIDATION_RULES } from '@/constants/validation'
import { GeneratorFormData } from '@/stores/letterStore'
import { FormField } from '@/interfaces/forms'

export const useFormFields = (): FormField<GeneratorFormData>[] => {
  const { t } = useTranslation()
  
  const COVER_LETTER_FORM_FIELDS: FormField<GeneratorFormData>[] = [
    {
      id: 'jobTitle',
      label: t('form.labels.jobTitle'),
      placeholder: t('form.placeholders.jobTitle'),
      autoFocus: true,
      required: true,
      inputType: 'text',
      validate: ({ value }) => {
        const stringValue = String(value || '')
        if (!stringValue.trim()) {
          return VALIDATION_MESSAGES.REQUIRED.JOB_TITLE
        } else if (stringValue.length > VALIDATION_RULES.MAX_LENGTH.JOB_TITLE) {
          return VALIDATION_MESSAGES.MAX_LENGTH.JOB_TITLE
        }
        return undefined
      }
    },
    {
      id: 'company',
      label: t('form.labels.company'),
      placeholder: t('form.placeholders.company'),
      required: true,
      inputType: 'text',
      validate: ({ value }) => {
        const stringValue = String(value || '')
        if (!stringValue.trim()) {
          return VALIDATION_MESSAGES.REQUIRED.COMPANY
        } else if (stringValue.length > VALIDATION_RULES.MAX_LENGTH.COMPANY) {
          return VALIDATION_MESSAGES.MAX_LENGTH.COMPANY
        }
        return undefined
      }
    },
    {
      id: 'skillsList',
      label: t('form.labels.skills'),
      placeholder: t('form.placeholders.skills'),
      required: true,
      fullWidth: true,
      inputType: 'text',
      validate: ({ value }) => {
        const stringValue = String(value || '')
        if (!stringValue.trim()) {
          return VALIDATION_MESSAGES.REQUIRED.SKILLS
        } else if (stringValue.length > VALIDATION_RULES.MAX_LENGTH.SKILLS) {
          return VALIDATION_MESSAGES.MAX_LENGTH.SKILLS
        }
        return undefined
      }
    },
    {
      id: 'additionalDetails',
      label: t('form.labels.additionalDetails'),
      placeholder: t('form.placeholders.additionalDetails'),
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


  return useMemo(() => COVER_LETTER_FORM_FIELDS, [])
}
