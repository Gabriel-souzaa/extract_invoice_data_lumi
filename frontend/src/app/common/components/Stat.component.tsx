'use client'

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react';

interface IStatComponent {
  label: string;
  number: string;
  number_porcent?: string;
  type?: 'increase' | 'decrease';
}

export const StatComponent: React.FC<IStatComponent> = ({ type, label, number, number_porcent }) => {

  return (
    <Stat className='p-4 rounded-lg border-2 shadow-lg shadow-lime-200'>
      <StatLabel>{label}</StatLabel>
      <StatNumber fontSize="2xl">{number}</StatNumber>
      {number_porcent && (
        <StatHelpText>
          <StatArrow type={type} />
          23.36%
        </StatHelpText>
      )}
    </Stat>
  );
};