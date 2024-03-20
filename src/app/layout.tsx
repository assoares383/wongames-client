'use client'

import StyledComponentsRegistry from '@/lib/registry'

import { ThemeProvider } from 'styled-components'
import { Providers } from './providers'

import theme from '@/styles/theme'

import './globals.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>
          <StyledComponentsRegistry>
            <Providers>{children}</Providers>
          </StyledComponentsRegistry>
        </body>
      </html>
    </ThemeProvider>
  )
}
