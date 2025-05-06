import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { PAGE_TITLES, META } from '@/constants/metadata'
import { ClientLayout } from './client-layout'
import { fixelDisplay, fixelText } from './fonts'
import '../globals.css'
import '../i18n'


export const metadata: Metadata = {
  title: PAGE_TITLES.MAIN,
  description: META.DESCRIPTION,
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body 
        className={`${fixelDisplay.variable} ${fixelText.variable}`} 
        suppressHydrationWarning
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
