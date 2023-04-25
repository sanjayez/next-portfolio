'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { DivProps } from 'react-html-props'

export default function Providers({ children }: DivProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}