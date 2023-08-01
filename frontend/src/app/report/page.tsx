'use client'

import { useInvoices } from "../common/context/invoices"
import { TableComponent } from '../common/components/Table.component';
import { Button, Stack } from "@chakra-ui/react";
import { SearchInputComponent } from "../common/components/SearchInput.component";
import { useEffect, useState } from "react";
import { MenuComponent } from "../common/components/Menu.components";

const menuData = [
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

export default function Report() {
  const { reportData, getReport } = useInvoices();
  const [searchText, setSearchText] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    (async () => {
      getReport(searchText, selectedItem);
    })();
  }, [searchText, selectedItem])

  const handleMenuItemSelect = (item: string) => {
    setSelectedItem(item);
  };

  const clearFilter = () => {
    setSearchText('')
    setSelectedItem('')
  }


  return (
    <div className="flex p-4 justify-center w-screen">
      <Stack spacing={4} className="flex flex-col p-4">
        <SearchInputComponent placeholder="Buscar por UC" value={searchText} onChange={setSearchText} />
        <MenuComponent onSelect={handleMenuItemSelect} selectedItem={selectedItem} defaultText="Mês" menuData={menuData} />
        <Button className='bg-teal-100 p-2 rounded-lg font-sans hover:bg-teal-300' onClick={clearFilter}>
          Limpar filtros
        </Button>
        {!reportData ?
          <h1>Sem registros para relatório.</h1>
          : <TableComponent />}
      </Stack>
    </div>
  )
}
