import api from '../../app/axiosInstance'
import { RegisterInterface, LoginInterface } from '@/types/auth'
import { UserInterface } from '@/types/user'

export const signUp = async ({
  email,
  name,
  password,
  phone,
}: RegisterInterface) => {
  const { data }: { data: UserInterface } = await api.post('/auth/signUp', {
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
  const { data }: { data: UserInterface } = await api.post('/auth/signIn', {
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
  if (token) {
    try {
      const { data }: { data: UserInterface } = await api.get('/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (data.token) {
        localStorage.setItem('token', data.token)
      }
      return data
    } catch (err) {
      localStorage.removeItem('token')
    }
  }
}
