'use client'

import { StatComponent } from "../common/components/Stat.component";
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';


export default function Dashboard() {
  return (
    <div className="w-screen flex justify-center ">
      <Box p={4}>
        <Heading mb={4}>Dashboard</Heading>

        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
          <StatComponent label="Cons. kWh" number="1.343" />
          <StatComponent label="Média kWh/Dia" number="47.96" />
          <StatComponent label="Dias" number="28" />
        </SimpleGrid>
      </Box>
    </div>
  )
}
