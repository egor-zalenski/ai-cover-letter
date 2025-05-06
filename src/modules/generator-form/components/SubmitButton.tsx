import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { GeneratorFormData } from '@/stores/letterStore'
import { ActionButton } from '@/ui/Button'
import { IconName } from '@/constants/icons'
import { Icon } from '@/ui/Icon'
import { SIZES } from '@/constants/app'
import { FormType, FormStateType } from '@/interfaces/forms'

interface SubmitButtonProps {
  form: FormType<GeneratorFormData>
  isGenerated: boolean
  isLoading: boolean
}

const getSubmitButtonContent = (isLoading: boolean, isGenerated: boolean, t: (key: string) => string): ReactNode => {
  if (isLoading) {
    return <Icon name={IconName.LOADING_BUTTON} size={SIZES.ICON_SIZE.MEDIUM} />
  }

  if (isGenerated) {
    return (
      <>
        <Icon name={IconName.REPEAT} size={SIZES.ICON_SIZE.MEDIUM} />
        {t('ui.button.update')}
      </>
    )
  }

  return t('ui.button.generate')
}

// Submit button component
export const SubmitButton = ({ form, isGenerated, isLoading }: SubmitButtonProps) => { 
  const { t } = useTranslation()
  const hasErrors = Object.values(form.state.errors).some(error => error !== undefined)
  const requiredFields: Array<keyof GeneratorFormData> = ['company', 'jobTitle', 'skillsList']
  const content = getSubmitButtonContent(isLoading, isGenerated, t)

  return (
    <form.Subscribe
      selector={(formState: FormStateType<GeneratorFormData>) => {
        const requiredFieldsComplete = requiredFields?.map((field) =>
          formState.fieldMeta[field]?.isTouched && formState.fieldMeta[field]?.isDirty
        )

        return formState.isValid && (isGenerated || !requiredFieldsComplete?.includes(false))
      }}
      children={(canSubmit: boolean) => (
        <ActionButton
          type="submit"
          $isWhite={isGenerated}
          disabled={!canSubmit || isLoading || hasErrors}
          fullWidth
        >
          {content}
        </ActionButton>
      )}
    />
  )
}