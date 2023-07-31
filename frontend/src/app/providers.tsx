'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { colorsTheme } from './common/util/theme'
import { InvoiceContextProvider } from './common/context/invoices'

export const theme = extendTheme({ colorsTheme })

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <InvoiceContextProvider>
          {children}
        </InvoiceContextProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}