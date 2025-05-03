import type {
  FormValidateOrFn,
  FormAsyncValidateOrFn,
  ReactFormExtendedApi,
  FormState,
} from '@tanstack/react-form'
import { Maybe } from './types';

// Define the form field structure
export interface FormField<T> {
  id: keyof T;
  label: string;
  placeholder: string;
  required?: boolean;
  inputType?: 'text' | 'textarea';
  rows?: number;
  maxLength?: number;
  fullWidth?: boolean;
  validate?: (input: Record<'value', string>) => Maybe<string>;
  autoFocus?: boolean
}

export type ValidatorsFormData<T> = Record<Partial<keyof T>, (input: Record<'value', string>) => Maybe<string>>;

export type FormType<T> = ReactFormExtendedApi<
  T,
  Maybe<FormValidateOrFn<T>>,
  Maybe<FormValidateOrFn<T>>,
  Maybe<FormAsyncValidateOrFn<T>>,
  Maybe<FormValidateOrFn<T>>,
  Maybe<FormAsyncValidateOrFn<T>>,
  Maybe<FormValidateOrFn<T>>,
  Maybe<FormAsyncValidateOrFn<T>>,
  Maybe<FormAsyncValidateOrFn<T>>,
  unknown
>

export type FormStateType<T> = FormState<
  T,
  Maybe<FormValidateOrFn<T>>,
  Maybe<FormValidateOrFn<T>>,
  Maybe<FormAsyncValidateOrFn<T>>,
  Maybe<FormValidateOrFn<T>>,
  Maybe<FormAsyncValidateOrFn<T>>,
  Maybe<FormValidateOrFn<T>>,
  Maybe<FormAsyncValidateOrFn<T>>,
  Maybe<FormAsyncValidateOrFn<T>>
>
