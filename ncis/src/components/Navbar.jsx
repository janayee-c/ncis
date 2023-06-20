import React from 'react'
import '../styles/Navbar.css'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
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
    height="20vh"
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

              <ScrollLink className="slink" to="ethos-section" 
              smooth={true} offset={-50} onClick={onClose}>ETHOS
              </ScrollLink>

              <ScrollLink className="slink" to="about-section" 
              smooth={true} offset={-50} onClick={onClose}>ABOUT
              </ScrollLink>

              <ScrollLink className="slink" to="goals-section" 
              smooth={true} offset={-50} onClick={onClose}>GOALS
              </ScrollLink>

              <ScrollLink className="slink" to="products-section" 
              smooth={true} offset={-50} onClick={onClose}>PRODUCTS & SERVICES
              </ScrollLink>

              <ScrollLink className="slink" to="execs-section" 
              smooth={true} offset={-50} onClick={onClose}>EXECUTIVE TEAM
              </ScrollLink>

              <ScrollLink className="slink" to="publications-section" 
              smooth={true} offset={-50} onClick={onClose}>PUBLICATIONS & MEDIA
              </ScrollLink>

              <ScrollLink className="slink" to="events-section" 
              smooth={true} offset={-50} onClick={onClose}>EVENTS 
              </ScrollLink>

              <ScrollLink className="slink" to="contact-section" 
              smooth={true} offset={-50} onClick={onClose}>CONTACT
              </ScrollLink>

              <Link class="slink" to="/Manual">MANUAL</Link>
              
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