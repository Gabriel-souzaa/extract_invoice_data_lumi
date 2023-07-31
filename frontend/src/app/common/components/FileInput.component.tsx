'use client'

import React from 'react';
import { Input } from '@chakra-ui/react';

interface FileInputProps {
  accept?: string;
}

export const FileInput: React.FC<FileInputProps> = ({ accept }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
  };

  return (
    <Input className='border-none' type="file" accept={accept} onChange={handleChange} />
  );
};