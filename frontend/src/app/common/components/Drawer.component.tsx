import { Link } from '@chakra-ui/next-js';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons';

interface IDrawer {
  isOpen: boolean
  onClose: () => void
}

export const DrawerComponent: React.FC<IDrawer> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody className='flex flex-col'>
            <Link href="/" onClick={onClose}>
              <ChevronRightIcon mr={2} /> Home
            </Link>
            <Link href="/dashboard" onClick={onClose}>
              <ChevronRightIcon mr={2} /> Dashboard
            </Link>
            <Link href="/report" onClick={onClose}>
              <ChevronRightIcon mr={2} /> Report
            </Link>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};