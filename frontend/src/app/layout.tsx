'use client'

import './common/styles/global.css';

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Providers } from './providers'
import { DrawerComponent } from './common/components/Drawer.component';
import { useState } from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const inter = Roboto({ subsets: ['latin'], weight: '500' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Providers>
          <Stack className='flex-row'>
            <div className='flex h-screen bg-lime-200 w-10 justify-center items-center'>
              <HamburgerIcon boxSize={6} onClick={toggleDrawer} />
            </div>

            <div className='p-5'>
              {children}
            </div>
          </Stack>
          <DrawerComponent isOpen={isOpen} onClose={toggleDrawer} />
        </Providers>
      </body>
    </html>
  )
}
