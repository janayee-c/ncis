import React from 'react'
import '../styles/Navbar.css'
import {
  Link
  } from 'react-router-dom';

import {
  Button,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer, 
  DrawerBody, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerOverlay, 
  DrawerContent,
  DrawerCloseButton, 
  Flex, 
  Text,
  List,
  ListItem,
  Stack,
  
} from '@chakra-ui/react';

import { useDisclosure, useMediaQuery } from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

import { COLORS } from '../constants/themes'


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [isTopDrawer] = useMediaQuery('(min-width: 700px)')

    function determineDrawer() {
      if (isTopDrawer) {
        return 'top';
      }
      else {
        return 'right';
      }
    }

  return (
    <Box
    display="flex"
    w="100%"
    backgroundColor="white"
    height="80px"
    justifyContent="space-between"
    alignItems="center"
    fontSize="40px"
  >
    <Menu> 
      <MenuButton as={Button} ref={btnRef} onClick={onOpen} rightIcon={<ChevronDownIcon />}>
    NavBar
      </MenuButton>
      <Drawer
        isOpen={isOpen}
        placement={determineDrawer()}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Stack direction='row'>
              <Link>Home</Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>

      </Drawer>
    </Menu>
  </Box>
  )
}

export default Navbar