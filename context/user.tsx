'use client'
import React, { createContext, useContext, useState } from 'react'
import { UserInterface, ContextType } from '@/types/user'

const AppContext = createContext<ContextType>({ user: null, setUser: () => {} })

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserInterface | null>(null)

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
