import { UseFormRegister, FieldErrors } from 'react-hook-form'

export interface RegisterInterface {
  name: string
  email: string
  password: string
  phone: string
}

export interface LoginInterface {
  email: string
  password: string
}

export interface InputValueTypeInterface {
  type: string
  required: string
  placeholder: string
  pattern?: {
    value: RegExp
    message: string
  }
  minLength?: number
  minLengthMsg?: string
  maxLength?: number
  maxLengthMsg?: string
}

export type InputType = {
  register: UseFormRegister<RegisterInterface> | UseFormRegister<LoginInterface>
  errors: FieldErrors<RegisterInterface>
  inputValue: InputValueTypeInterface
}
