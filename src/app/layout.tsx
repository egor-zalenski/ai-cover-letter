import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { PAGE_TITLES, META } from '@/constants/strings'
import { ClientLayout } from './client-layout'
import { fixelDisplay, fixelText } from './fonts'
import '../globals.css'


export const metadata: Metadata = {
  title: PAGE_TITLES.MAIN,
  description: META.DESCRIPTION,
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body 
        className={`${fixelDisplay.variable} ${fixelText.variable}`} 
        data-theme="light" 
        suppressHydrationWarning
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
