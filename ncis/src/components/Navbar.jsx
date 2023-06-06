import React from 'react'
import '../styles/Navbar.css'
import {
  Link
  } from 'react-router-dom';

import {
  IconButton,
  Box,
  Menu,
  MenuButton,
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
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'


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
      <IconButton
        ref={btnRef} 
        onClick={onOpen} 
        variant='outline'
        colorScheme='black'
        size="lg"
        aria-label="Open Dropdown"
        icon={<HamburgerIcon />}/>

      <Drawer
        isOpen={isOpen}
        placement={placeDrawer()}
        onClose={onClose}
        finalFocusRef={btnRef}
        width="400px"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Stack direction={stackDirection()} spacing={2} textAlign="center" justifyContent="center">
              <Link >ETHOS</Link>
              <Link class="links">ABOUT</Link>
              <Link class="links">GOALS</Link>
              <Link class="links">PRODUCTS AND SERVICES</Link>
              <Link class="links">EXECUTIVE TEAM</Link>
              <Link class="links">PUBLICATIONS AND MEDIA</Link>
              <Link class="links">EVENTS</Link>
              <Link class="links">CONTACT</Link>
              <Link class="links" to="/Manual">MANUAL</Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>

      </Drawer>
    </Menu>
  </Box>
  )
}

export default Navbar