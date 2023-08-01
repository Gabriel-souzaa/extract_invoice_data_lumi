'use client'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Text,
} from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { useInvoices } from '../context/invoices';
import { useState } from 'react';


const pageSize = 3;

export const TableComponent: React.FC = () => {
  const { reportData: data, loading } = useInvoices();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);

  const handleNextPage = () => {
    setCurrentPage((prev: any) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev: any) => Math.max(prev - 1, 1));
  };

  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const ItemsTbody = () => {
    return (
      <Tbody key={'tbody-component'}>

        {loading ?
          (
            <Tr>
              <Td colSpan={4} textAlign="center">
                <Spinner />
              </Td>
            </Tr>
          )
          : (
            paginatedData.map((item) => (
              <Tr key={`tr-table-${item.id}`}>
                <Td>{item.number_client}</Td>
                <Td>{item.invoice_history?.length}</Td>
              </Tr>
            ))
          )
        }
      </Tbody>
    )
  }

  const ItemsThead = () => {
    return (
      <Thead bgColor={'teal.50'}>
        <Tr>
          <Th>Nº do cliente</Th>
          <Th>Notas relacionadas</Th>
        </Tr>
      </Thead>
    )
  }

  return (
    <TableContainer>
      <Table variant='simple'>
        <ItemsThead />
        <ItemsTbody />
      </Table>
      <div className='flex flex-row justify-between items-center p-4'>
        <Button onClick={handlePrevPage} isDisabled={currentPage === 1}>
          Anterior
        </Button>
        <Text>
          Página {currentPage} de {data && totalPages}
        </Text>
        <Button onClick={handleNextPage} isDisabled={currentPage === totalPages}>
          Próxima
        </Button>
      </div>
    </TableContainer>
  );
};