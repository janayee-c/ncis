import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
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
import { useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(); //uses current / mutable value
  const [isTopDrawer] = useMediaQuery('(min-width: 990px)');
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full'];

  const [activeLink, setActiveLink] = useState(null);

  function handleHoverColour(link) {
    setActiveLink(link);
  }

  function handleResetColour() {
    setActiveLink(null);
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
      <Img id="logo" src={require('../images/ncis_test.png')} />

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
          icon={<HamburgerIcon />}
          className="centered-icon"
        />

        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement={isTopDrawer ? 'top' : 'right'}
          finalFocusRef={btnRef}
          width="100%"
          size="xl"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Box height="100px">
                <Stack
                  direction={isTopDrawer ? 'row' : 'column'}
                  spacing={0.8}
                  textAlign="center"
                  justifyContent="center"
                >
                  <ScrollLink
                    onMouseEnter={() => handleHoverColour('ethos')}
                    onMouseLeave={handleResetColour}
                    className={`${
                      activeLink === 'ethos' ? 'color-navy pointer' : 'slink'
                    }`}
                    to="ethos-section"
                    smooth={true}
                    offset={-50}
                    onClick={onClose}
                  >
                    ETHOS
                  </ScrollLink>

                  <ScrollLink
                    onMouseEnter={() => handleHoverColour('about')}
                    onMouseLeave={handleResetColour}
                    className={`${
                      activeLink === 'about' ? 'color-navy pointer' : 'slink'
                    }`}
                    to="about-section"
                    smooth={true}
                    offset={-50}
                    onClick={onClose}
                  >
                    ABOUT
                  </ScrollLink>


                  <ScrollLink
                    onMouseEnter={() => handleHoverColour('goals')}
                    onMouseLeave={handleResetColour}
                    className={`${
                      activeLink === 'goals' ? 'color-navy pointer' : 'slink'
                    }`}
                    to="goals-section"
                    smooth={true}
                    offset={-50}
                    onClick={onClose}
                  >
                    GOALS
                  </ScrollLink>


                  <ScrollLink
                    onMouseEnter={() => handleHoverColour('ps')}
                    onMouseLeave={handleResetColour}
                    className={`${
                      activeLink === 'ps' ? 'color-navy pointer' : 'slink'
                    }`}
                    to="products-section"
                    smooth={true}
                    offset={-50}
                    onClick={onClose}
                  >
                    PRODUCTS & SERVICES
                  </ScrollLink>

                  <ScrollLink
                    onMouseEnter={() => handleHoverColour('execs')}
                    onMouseLeave={handleResetColour}
                    className={`${
                      activeLink === 'execs' ? 'color-navy pointer' : 'slink'
                    }`}
                    to="execs-section"
                    smooth={true}
                    offset={-50}
                    onClick={onClose}
                  >
                    EXECS
                  </ScrollLink>

                  <ScrollLink
                    onMouseEnter={() => handleHoverColour('pm')}
                    onMouseLeave={handleResetColour}
                    className={`${
                      activeLink === 'pm' ? 'color-navy pointer' : 'slink'
                    }`}
                    to="publications-section"
                    smooth={true}
                    offset={-50}
                    onClick={onClose}
                  >
                    PUBLICATIONS & MEDIA 
                  </ScrollLink>
                  

                  <ScrollLink
                    onMouseEnter={() => handleHoverColour('contact')}
                    onMouseLeave={handleResetColour}
                    className={`${
                      activeLink === 'contact' ? 'color-navy pointer' : 'slink'
                    }`}
                    to="contact-section"
                    smooth={true}
                    offset={-50}
                    onClick={onClose}
                  >
                    CONTACT
                  </ScrollLink>
                  
                  
                  <Link 
                    onMouseEnter={() => handleHoverColour('manual')}
                    onMouseLeave={handleResetColour}
                    className={`${
                    activeLink === 'manual' ? 'color-navy pointer' : 'slink'
                    }`} to="/Manual"
                  >
                    MANUAL
                  </Link>

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