'use client'
import React from 'react'
import styles from './Login.module.scss'
import { useForm } from 'react-hook-form'
import Input from '../Input/Input'
import { LoginInterface } from '@/types/auth'
import { inputsLoginValue } from '@/utils/additionalLists'
import { signInFx } from '@/app/api/auth'
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify'

const Login = () => {
  const router = useRouter()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInterface>()
  const onSubmit = async (data: LoginInterface) => {
    const { email, password } = data
    const user = await signInFx({ password, email })
    console.log(user)
    toast.success('Hello', { position: 'bottom-right' })
    router.push('/')
  }
  return (
    <form className={styles.authPage} onSubmit={handleSubmit(onSubmit)}>
      <p className={styles.title}>SignIn</p>
      {inputsLoginValue.map((input) => (
        <Input
          key={input.type}
          register={register}
          errors={errors}
          inputValue={input}
        />
      ))}

      <button className={styles.btn}>Login</button>
    </form>
  )
}

export default Login
