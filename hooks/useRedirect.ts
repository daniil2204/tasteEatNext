import { useRouter } from 'next/router'
import { useState } from 'react'

const useRedirect = (isAuthPage = false) => {
  const [shouldLoadContent, setShouldLoadContent] = useState(false)
  const router = useRouter()
  const checkUser = async () => {
    const user = await 
  }
}
