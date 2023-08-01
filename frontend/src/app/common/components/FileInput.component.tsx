'use client'

import React from 'react';
import { Input, useToast } from '@chakra-ui/react';
import { useInvoices } from '../context/invoices';

interface FileInputProps {
  accept?: string;
}

export const FileInput: React.FC<FileInputProps> = ({ accept }) => {
  const toast = useToast();
  const { getClients } = useInvoices();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("attachment", file);

    const response = await fetch('http://localhost:3001/api/extractor', {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      return toast({
        title: 'Erro ao fazer upload.',
        description: response.statusText,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }

    getClients();

    toast({
      title: 'Upload de arquivo',
      description: "Arquivo fez o upload com sucesso.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  };

  return (
    <Input className='border-none' type="file" accept={accept} onChange={handleChange} />
  );
};