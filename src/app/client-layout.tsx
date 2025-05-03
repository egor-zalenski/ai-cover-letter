'use client'

import React, { PropsWithChildren } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ThemeProvider from '@/components/ThemeProvider'
import StyledComponentsRegistry from './registry'

// Create a query client
const queryClient = new QueryClient()

export function ClientLayout({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <StyledComponentsRegistry>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            {children}
            <ToastContainer />
          </ThemeProvider>
        </QueryClientProvider>
      </StyledComponentsRegistry>
    </ErrorBoundary>
  )
} 