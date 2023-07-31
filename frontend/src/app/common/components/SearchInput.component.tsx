import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface ISearchInputComponent {
  placeholder: string;
  value: string;
  onChange: (p: string) => void;
}

export const SearchInputComponent: React.FC<ISearchInputComponent> = ({ placeholder, onChange, value }) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder={placeholder || "Buscar..."}
        value={value}
        onChange={(text) => onChange(text.target.value)}
      />
    </InputGroup>
  );
};