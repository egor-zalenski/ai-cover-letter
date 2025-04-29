import localFont from 'next/font/local'

// Fixel Display variants
export const fixelDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/FixelDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FixelDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FixelDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-fixel-display',
  display: 'swap',
})

// Fixel Text variants
export const fixelText = localFont({
  src: [
    {
      path: '../../public/fonts/FixelText-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FixelText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FixelText-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FixelText-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FixelText-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-fixel-text',
  display: 'swap',
}) 