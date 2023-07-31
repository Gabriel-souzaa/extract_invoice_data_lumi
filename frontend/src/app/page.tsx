'use client'

import { Text } from '@chakra-ui/react'
import { FileInput } from './common/components/FileInput.component';

export default function Home() {

  return (
    <div className='flex items-center justify-center w-screen h-screen flex-col'>
      <Text fontSize='5xl'>Importe a nota fiscal na plataforma!!</Text>
      <div className='flex items-center justify-center p-20 bg-lime-50 rounded-lg'>
        <FileInput accept=".pdf,.doc,.docx" />
      </div>
    </div>
  )
}
