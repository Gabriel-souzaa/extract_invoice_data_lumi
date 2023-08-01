'use client'

import { StatComponent } from "../common/components/Stat.component";
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { MenuComponent } from "../common/components/Menu.components";
import { useState } from "react";
import { useInvoices } from "../common/context/invoices";

const menuDataMonth = [
  { label: 'JAN' },
  { label: 'FEV' },
  { label: 'MAR' },
  { label: 'ABR' },
  { label: 'MAI' },
  { label: 'JUN' },
  { label: 'JUL' },
  { label: 'AGO' },
  { label: 'SET' },
  { label: 'OUT' },
  { label: 'NOV' },
  { label: 'DEZ' }
]

export default function Dashboard() {
  const { clientsData } = useInvoices();
  const [selectedItemMonth, setSelectedItemMonth] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  const handleMenuItemSelectMonth = (item: string) => {
    setSelectedItemMonth(item);
  };

  const handleMenuItemSelect = (item: string) => {
    setSelectedItem(item);
  };

  const menuDataClient = clientsData.map((item) => {
    return {
      label: item.number_client
    }
  });

  const filterDashboard = clientsData.find(item => item.number_client === selectedItem);
  const filterData = filterDashboard?.consumption_history?.find(item => item.month_reference === selectedItemMonth);

  return (
    <div className="w-screen flex justify-center ">
      <Box p={4}>
        <Heading mb={4}>Dashboard</Heading>

        <div className="flex pb-4 justify-between">
          <MenuComponent onSelect={handleMenuItemSelect} selectedItem={selectedItem} defaultText="Numero cliente" menuData={menuDataClient} />
          <MenuComponent onSelect={handleMenuItemSelectMonth} selectedItem={selectedItemMonth} defaultText="Mês" menuData={menuDataMonth} />
        </div>


        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
          <StatComponent label="Cons. kWh" number={filterData?.consumption || '0'} />
          <StatComponent label="Média kWh/Dia" number={filterData?.average || '0'} />
          <StatComponent label="Dias" number={filterData?.days || '0'} />
        </SimpleGrid>

      </Box>
    </div>
  )
}
