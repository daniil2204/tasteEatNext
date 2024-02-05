import React from 'react'
import styles from './Input.module.scss'
import { InputType } from '@/types/auth'

const Input = ({ register, errors, inputValue }: InputType) => {
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
        placeholder={`${inputValue.placeholder}`}
        type={`${inputValue.type}`}
      />
      {errors[`${inputValue.type}`] && (
        <span className={styles.alert}>
          {errors[`${inputValue.type}`].message}
        </span>
      )}
      {errors[`${inputValue.type}`] &&
        errors[`${inputValue.type}`].type === 'minLength' && (
          <span className={styles.alert}>{inputValue.minLengthMsg}</span>
        )}
      {errors[`${inputValue.type}`] &&
        errors[`${inputValue.type}`].type === 'maxLength' && (
          <span className={styles.alert}>{inputValue.maxLengthMsg}s</span>
        )}
    </label>
  )
}

export default Input
