'use client'

import { ReactNode } from 'react'
import styled from 'styled-components'
import type { DeepValue } from '@tanstack/react-form'
import { Input } from '@/ui/Input'
import { TextArea } from '@/ui/TextArea'
import { DEFAULT_TEXTAREA_MAX_LENGTH } from '@/constants/app'
import { FormContainer, FormGroup, Label } from '@/ui/Form'
import { FormField, FormType, ValidatorsFormData } from '@/interfaces/forms'

export interface FormRendererProps<T> {
  form: FormType<T>;
  formFields: FormField<T>[];
  validators: ValidatorsFormData<T>
}

interface FieldRenderProps {
  id: string;
  value: string;
  handleChange: (value: string) => void;
  handleBlur: () => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
  autoFocus?: boolean;
  inputType?: 'text' | 'textarea';
}

// Extract field rendering to separate component
const FormFieldInput = ({
  id,
  value,
  handleChange,
  handleBlur,
  error,
  placeholder,
  required,
  rows,
  autoFocus,
  maxLength = DEFAULT_TEXTAREA_MAX_LENGTH,
  inputType
}: FieldRenderProps) => {
  if (inputType === 'textarea') {
    return (
      <>
        <TextArea
          id={id}
          name={id}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          error={error}
          rows={rows}
          placeholder={placeholder}
        />
        {!!maxLength && <CharCounter $hasError={!!error}>{`${value?.length || 0}/${maxLength}`}</CharCounter>}
      </>
    )
  }

  return (
    <Input
      id={id}
      name={id}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      onBlur={handleBlur}
      placeholder={placeholder}
      error={error}
      required={required}
      autoFocus={autoFocus}
    />
  )
}

// Character counter styling
const CharCounter = styled.span<{ $hasError?: boolean }>`
  display: block;
  font-size: 14px;
  color: ${props => props.$hasError ? 'var(--danger)' : 'var(--text-gray)'};
  margin-bottom: 16px;
`

export function FormRenderer<T>({
  form,
  formFields,
  validators
}: FormRendererProps<T>) {
  // Helper to render the field with error message
  const renderField = (
    field: FormField<T>,
    children: ReactNode,
  ) => (
    <FormGroup $fullWidth={field.fullWidth} key={field.id as string}>
      <Label htmlFor={field.id as string}>{field.label}</Label>
      {children}
    </FormGroup>
  )

  return (
    <FormContainer>
      {formFields.map((field) => (
        <form.Field
          key={field.id as string}
          name={field.id as string}
          validators={{
            onChange: (props) => validators[field.id]?.({ value: props.value as string }),
          }}
          
        >
          {(fieldProps) => {
            const error = fieldProps.state.meta.errors?.[0]
            return renderField(
              field,
              <FormFieldInput
                id={field.id as string}
                value={fieldProps.state.value as string}
                handleChange={(value: string) => fieldProps.handleChange(value as DeepValue<T, string>)}
                handleBlur={fieldProps.handleBlur}
                error={error}
                placeholder={field.placeholder}
                required={field.required}
                rows={field.rows}
                inputType={field.inputType}
                autoFocus={field.autoFocus}
              />,
            )
          }}
        </form.Field>
      ))}
    </FormContainer>
  )
} 