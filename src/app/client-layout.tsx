'use client'

import React, { PropsWithChildren } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ThemeProvider from '@/components/ThemeProvider'

// Create a query client
const queryClient = new QueryClient()

export function ClientLayout({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          {children}
          <ToastContainer />
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  )
} 