import api from '../../app/axiosInstance'
import { RegisterInterface, LoginInterface } from '@/types/auth'

export const signUp = async ({
  email,
  name,
  password,
  phone,
}: RegisterInterface) => {
  const { data }: { data: { token: string } } = await api.post('/auth/signUp', {
    email,
    name,
    password,
    phone,
  })
  if (data.token) {
    localStorage.setItem('token', data.token)
  }
  return data
}

export const signIn = async ({ email, password }: LoginInterface) => {
  const { data }: { data: { token: string } } = await api.post('/auth/signIn', {
    email,
    password,
  })
  if (data.token) {
    localStorage.setItem('token', data.token)
  }
  return data
}

export const getMe = async () => {
  const token = localStorage.getItem('token')
  const { data }: { data: { token: string } } = await api.get('/me', {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (data.token) {
    localStorage.setItem('token', data.token)
  }
  return data.token
}
