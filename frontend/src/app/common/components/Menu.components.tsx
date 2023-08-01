import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'

interface IMenuComponent {
  defaultText: string;
  selectedItem: string;
  onSelect: (item: string) => void;
  menuData: { label: string }[]
}

export const MenuComponent: React.FC<IMenuComponent> = ({ onSelect, selectedItem, defaultText, menuData }) => {

  return (
    <Menu>
      <MenuButton className='bg-teal-100 p-2 rounded-lg'>
        {selectedItem ? selectedItem : defaultText}
        <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        {menuData.map((item) => (
          <MenuItem key={`menu-item-${item.label}`} onClick={() => onSelect(item.label)}>{item.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};