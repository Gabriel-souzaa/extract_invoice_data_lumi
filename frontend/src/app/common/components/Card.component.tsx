'use client'

import { SunIcon } from '@chakra-ui/icons'
import { Card, CardBody, CardFooter, Stack } from '@chakra-ui/react'

interface ICardComponent {
  children: React.ReactNode
}

export const CardComponent: React.FC<ICardComponent> = ({ children }) => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <SunIcon />

      <Stack>
        <CardBody className='justify-center items-center'>
          {children}
        </CardBody>
      </Stack>
    </Card>
  )
}