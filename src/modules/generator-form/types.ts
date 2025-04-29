import type {
  FormState,
  FormValidateOrFn,
  FormAsyncValidateOrFn,
  ReactFormExtendedApi,
} from '@tanstack/react-form'
import { CoverLetter, GenerateFormData } from '@/stores/letterStore'
import { Maybe } from '@/interfaces/types'

export interface GeneratorFormProps {
  existingLetter?: CoverLetter
}

// Interface for validation errors matching form fields
export type ValidationErrors = Partial<Record<keyof GenerateFormData, string>>;

export type FormStateType = FormState<
  GenerateFormData,
  Maybe<FormValidateOrFn<GenerateFormData>>,
  Maybe<FormValidateOrFn<GenerateFormData>>,
  Maybe<FormAsyncValidateOrFn<GenerateFormData>>,
  Maybe<FormValidateOrFn<GenerateFormData>>,
  Maybe<FormAsyncValidateOrFn<GenerateFormData>>,
  Maybe<FormValidateOrFn<GenerateFormData>>,
  Maybe<FormAsyncValidateOrFn<GenerateFormData>>,
  Maybe<FormAsyncValidateOrFn<GenerateFormData>>
>

export type FormType = ReactFormExtendedApi<
  GenerateFormData,
  Maybe<FormValidateOrFn<GenerateFormData>>,
  Maybe<FormValidateOrFn<GenerateFormData>>,
  Maybe<FormAsyncValidateOrFn<GenerateFormData>>,
  Maybe<FormValidateOrFn<GenerateFormData>>,
  Maybe<FormAsyncValidateOrFn<GenerateFormData>>,
  Maybe<FormValidateOrFn<GenerateFormData>>,
  Maybe<FormAsyncValidateOrFn<GenerateFormData>>,
  Maybe<FormAsyncValidateOrFn<GenerateFormData>>,
  unknown
>