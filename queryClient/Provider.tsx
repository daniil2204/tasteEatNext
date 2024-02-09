'use client'

import React, { useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            gcTime: 1800000,
            staleTime: 1200000,
          },
        },
      })
  )
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
