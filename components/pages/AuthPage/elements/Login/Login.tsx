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

const Login = () => {
  const { setUser } = useAppContext()
  const router = useRouter()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInterface>()
  const onSubmit = async (data: LoginInterface) => {
    try {
      const { email, password } = data
      const user = await signIn({ password, email })
      setUser({
        email: user.email,
        phone: user.phone,
        name: user.name,
        id: user.id,
      })
      toast.success(`Login was successful`, { position: 'bottom-right' })
      router.push('/')
    } catch (error) {
      toast.error('Email or password are wrong', { position: 'bottom-right' })
    }
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
