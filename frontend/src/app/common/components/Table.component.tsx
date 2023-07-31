'use client'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { IInvoiceData } from '../interface/invoices.interface';
import { Spinner } from '@chakra-ui/react'

export interface ITableComponent {
  data: IInvoiceData[];
  loading: boolean;
}

export const TableComponent: React.FC<ITableComponent> = ({ data, loading }) => {


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
            data.map((item) => (
              <Tr key={`tr-table-${item.id}`}>
                <Td>{item.month_reference}</Td>
                <Td>{item.number_client}</Td>
                <Td>{item.expiration_date}</Td>
                <Td>{item.total_value}</Td>
              </Tr>
            ))
          )
        }
      </Tbody>
    )
  }

  return (
    <TableContainer>
      <Table variant='striped'>
        <Thead>
          <Tr>
            <Th>Nº do cliente</Th>
            <Th>Referente a </Th>
            <Th>Vencimento</Th>
            <Th>Valor a pagar (R$)</Th>
          </Tr>
        </Thead>
        <ItemsTbody />
      </Table>
    </TableContainer>
  );
};