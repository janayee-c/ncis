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


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [isTopDrawer] = useMediaQuery('(min-width: 900px)')
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

    function placeDrawer() {
      if (isTopDrawer) {
        return 'top';
      }
      else {
        return 'right';
      }
    }


    function stackDirection() {
      if (isTopDrawer) {
        return 'row';
      }
      else {
        return 'column';
      }
    }

  return (
    <Box
    display="flex"
    w="100%"
    backgroundColor="white"
    height="100px"
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
        placement={placeDrawer()}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Stack direction={stackDirection()} spacing={4}>
              <Link>Ethos</Link>
              <Link>About</Link>
              <Link>Goals</Link>
              <Link>Products and Services</Link>
              <Link>Executive Team</Link>
              <Link>Publications and Media</Link>
              <Link>Events</Link>
              <Link>Contact</Link>
              <Link to="/Manual">Manual</Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>

      </Drawer>
    </Menu>
  </Box>
  )
}

export default Navbar