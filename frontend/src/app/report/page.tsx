'use client'

import { useInvoices } from "../common/context/invoices"
import { TableComponent } from '../common/components/Table.component';
import { Stack } from "@chakra-ui/react";
import { SearchInputComponent } from "../common/components/SearchInput.component";
import { useState } from "react";

export default function Report() {
  const { invoicesData, loading } = useInvoices();
  const [searchText, setSearchText] = useState("");

  console.log(searchText);


  return (
    <div>
      <Stack className="flex flex-col space-x-2">
        <SearchInputComponent placeholder="Busque aqui...." value={searchText} onChange={setSearchText} />
        <TableComponent data={invoicesData} loading={loading} />
      </Stack>
    </div>
  )
}
