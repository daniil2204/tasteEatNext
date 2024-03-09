'use client'
import React from 'react'
import styles from './Login.module.scss'
import { useForm } from 'react-hook-form'
import Input from '../Input/Input'
import { LoginInterface } from '@/types/auth'
import { inputsLoginValue } from '@/utils/additionalLists'
import { signIn } from '@/app/api/auth'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useAppContext } from '@/context/user'
import { useMutation } from '@tanstack/react-query'

const Login = () => {
  const { setUser } = useAppContext()
  const { mutate } = useMutation({
    mutationFn: ({ email, password }: LoginInterface) =>
      signIn({ email, password }),
    onSuccess(data) {
      const { email, id, phone, name } = data
      setUser({
        email,
        phone,
        name,
        id,
      })
      toast.success(`Login was successful`, { position: 'bottom-right' })
      router.push('/')
    },
    onError() {
      toast.error('Email or password are wrong', { position: 'bottom-right' })
    },
  })
  const router = useRouter()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInterface>()
  const onSubmit = async (data: LoginInterface) => {
    const { email, password } = data
    mutate({ email, password })
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
