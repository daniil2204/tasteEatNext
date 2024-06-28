'use client'
import React from 'react'
import styles from './Input.module.scss'
import { InputType } from '@/types/auth'

const Input = ({ register, errors, inputValue }: InputType) => {
  const error = errors[inputValue.type as keyof typeof errors]
  return (
    <label className={styles.inputWrapper}>
      <input
        {...register(inputValue.type, {
          required: inputValue.required,
          minLength: inputValue.minLength,
          maxLength: inputValue.maxLength,
          pattern: inputValue.pattern
            ? {
                value: inputValue.pattern.value,
                message: inputValue.pattern.message,
              }
            : {},
        })}
        className={styles.input}
        placeholder={inputValue.placeholder}
        type={inputValue.type}
      />
      {error && <span className={styles.alert}>{error.message}</span>}
      {error && error.type === 'minLength' && (
        <span className={styles.alert}>{inputValue.minLengthMsg}</span>
      )}
      {error && error.type === 'maxLength' && (
        <span className={styles.alert}>{inputValue.maxLengthMsg}</span>
      )}
    </label>
  )
}

export default Input
