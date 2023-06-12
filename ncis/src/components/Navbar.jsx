import React from 'react'
import '../styles/Navbar.css'
import {
  Link
  } from 'react-router-dom';

import {
  IconButton,
  Box,
  Menu,
  Img,
  Drawer, 
  DrawerBody,  
  DrawerOverlay, 
  DrawerContent,
  DrawerCloseButton, 
  Stack,
  
} from '@chakra-ui/react';

import { useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef() //uses current / mutable value 
    const [isTopDrawer] = useMediaQuery('(min-width: 990px)')
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
    backgroundColor="#F5F5F5"
    height="300px"
    justifyContent="space-between"
    alignItems="center"
    fontSize="40px"
    >
    <Img 
        id="logo" 
        src={require('../images/ncis_test.png')}/>

    <Menu> 
    <IconButton
    ref={btnRef} 
    edge="end"
    float="right"
    onClick={onOpen} 
    variant="unstyled"
    color="black"
    size="xl"
    aria-label="Open Dropdown"
    icon={<HamburgerIcon/>}
    className="centered-icon"
    />

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={placeDrawer()}
        finalFocusRef={btnRef}
        width="100%"
        size="xl"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerBody>
            <Box height="100px">
            <Stack direction={stackDirection()} spacing={0.8} textAlign="center" justifyContent="center">
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
            </Box>
          </DrawerBody>
        </DrawerContent>

      </Drawer>
    </Menu>
  </Box>
  )
}

export default Navbar