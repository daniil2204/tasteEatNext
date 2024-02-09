'use client'
import React from 'react'
import styles from './Register.module.scss'
import { useForm } from 'react-hook-form'
import Input from '../Input/Input'
import { RegisterInterface } from '@/types/auth'
import { inputsRegisterValue } from '@/utils/additionalLists'
import { signUp } from '@/app/api/auth'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useAppContext } from '@/context/user'
import { useMutation } from '@tanstack/react-query'

const Register = () => {
  const { setUser } = useAppContext()
  const { mutate } = useMutation({
    mutationFn: ({ email, password, name, phone }: RegisterInterface) =>
      signUp({ email, password, name, phone }),
    onSuccess(data) {
      const { email, id, phone, name } = data
      setUser({
        email,
        phone,
        name,
        id,
      })
      toast.success(`Register was successful`, { position: 'bottom-right' })
      router.push('/')
    },
    onError() {
      toast.error('Fields values are wrong', { position: 'bottom-right' })
    },
  })
  const router = useRouter()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterInterface>()
  const onSubmit = async (data: RegisterInterface) => {
    const { email, name, password, phone } = data
    mutate({ email, password, name, phone })
    // try {
    //   const { email, name, password, phone } = data
    //   const user = await signUp({ password, phone, name, email })
    //   setUser({
    //     email: user.email,
    //     phone: user.phone,
    //     name: user.name,
    //     id: user.id,
    //   })
    //   toast.success(`Register was successful`, { position: 'bottom-right' })
    //   router.push('/')
    // } catch (error) {
    //   toast.error('Email or password are wrong', { position: 'bottom-right' })
    // }
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
