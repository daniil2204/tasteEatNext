'use client'
import React from 'react'
import styles from './Register.module.scss'
import { useForm } from 'react-hook-form'
import Input from '../Input/Input'
import { RegisterInterface } from '@/types/auth'
import { inputsRegisterValue } from '@/utils/additionalLists'
import { signUp } from '@/app/api/auth'
import { useRouter } from 'next/navigation'

const Register = () => {
  const router = useRouter()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterInterface>()
  const onSubmit = async (data: RegisterInterface) => {
    const { email, name, password, phone } = data
    const user = await signUp({ password, phone, name, email })
    console.log(user)
    router.push('/')
  }
  return (
    <form className={styles.authPage} onSubmit={handleSubmit(onSubmit)}>
      <p className={styles.title}>SignUp</p>
      {inputsRegisterValue.map((input) => (
        <Input
          key={input.type}
          register={register}
          errors={errors}
          inputValue={input}
        />
      ))}

      <button className={styles.btn}>Register</button>
    </form>
  )
}

export default Register
