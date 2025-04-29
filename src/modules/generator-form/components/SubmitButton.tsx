import React, { ReactNode } from 'react'
import { GenerateFormData } from '@/stores/letterStore'
import { ActionButton } from '@/ui/Button'
import { IconName } from '@/constants/icons'
import { Icon } from '@/ui/Icon'
import { SIZES } from '@/constants/app'
import { BUTTON_LABELS } from '@/constants/strings'
import { FormStateType, FormType } from '../types'

interface SubmitButtonProps {
  form: FormType
  isGenerated: boolean
  isLoading: boolean
}

const getSubmitButtonContent = (isLoading: boolean, isGenerated: boolean): ReactNode => {
  if (isLoading) {
    return <Icon name={IconName.LOADING_BUTTON} size={SIZES.ICON_SIZE.MEDIUM} />
  }

  if (isGenerated) {
    return (
      <>
        <Icon name={IconName.REPEAT} size={SIZES.ICON_SIZE.MEDIUM} />
        {BUTTON_LABELS.UPDATE}
      </>
    )
  }

  return BUTTON_LABELS.GENERATE
}

// Submit button component
export const SubmitButton = ({ form, isGenerated, isLoading }: SubmitButtonProps) => { 
  const hasErrors = Object.values(form.state.errors).some(error => error !== undefined)
  const requiredFields: Array<keyof GenerateFormData> = ['company', 'jobTitle', 'skillsList']
  const content = getSubmitButtonContent(isLoading, isGenerated)

  return (
    <form.Subscribe
      selector={(formState: FormStateType) => {
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