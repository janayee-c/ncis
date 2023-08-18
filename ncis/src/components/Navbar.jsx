import React, { useState, useRef } from 'react';
import '../styles/Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import {
  IconButton,
  Box,
  Img,
  Drawer,
  DrawerBody,
  DrawerContent,
  Stack,
  useDisclosure,
  useMediaQuery,
  DrawerOverlay
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Logo } from '../images/export';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const drawerRef = useRef();
  const [isTopDrawer] = useMediaQuery('(min-width: 990px)');
  const [activeLink, setActiveLink] = useState(null);

  const handleHover = (link) => {
    setActiveLink(link);
  };
  const sections = [
    { id: 'ethos', label: 'ETHOS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'goals', label: 'GOALS' },
    { id: 'products', label: 'PRODUCTS & SERVICES' },
    { id: 'execs', label: 'EXECUTIVE TEAM' },
    { id: 'pubs', label: 'PUBLICATIONS & MEDIA' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <>
      <Box
        display="flex"
        w="100%"
        backgroundColor="#F5F5F5"
        height="20vh"
        justifyContent="space-between"
        alignItems="center"
        fontSize="40px"
        position="relative"
        className="navbar-box"
      >
        <Img id="logo" src={Logo} />

        <IconButton
          ref={btnRef}
          icon={<HamburgerIcon />}
          edge="end"
          float="right"
          onMouseEnter={onOpen}
      
          variant="unstyled"
          color="black"
          size="xl"
          aria-label="Open Dropdown"
          className="centered-icon"
        />

        <Drawer
          isOpen={isOpen}
          onMouseLeave={onClose}
          placement={isTopDrawer ? 'top' : 'right'}
          finalFocusRef={btnRef}
          width="100%"
          size={isTopDrawer ? 'xl' : 'xs'}
          ref={drawerRef}
        >
          <DrawerOverlay/>
          <DrawerContent isOpen={isOpen} onMouseLeave={onClose}>
            <DrawerBody>
              <Box height="80px" justifyContent="center" alignItems="center">
                <Stack
                  direction={isTopDrawer ? 'row' : 'column'}
                  spacing={0.5}
                  textAlign="center"
                  justifyContent="center"
                >
                  {sections.map((section) => (
                    <ScrollLink
                      key={section.id}
                      onMouseEnter={() => handleHover(section.id)}
                      onMouseLeave={() => handleHover(null)}
                      className={`${
                        activeLink === section.id
                          ? 'color-navy pointer'
                          : 'slink'
                      }`}
                      to={`${section.id}-section`}
                      smooth={true}
                      offset={-50}
                      onClick={onClose}
                    >
                      {section.label}
                    </ScrollLink>
                  ))}

                  {isTopDrawer ?
                  <Link
                    onMouseEnter={() => handleHover('manual')}
                    onMouseLeave={() => handleHover(null)}
                    className={`${
                      activeLink === 'manual' ? 'color-navy pointer' : 'slink'
                    }`}
                    to="/Manual"
                  >
                    MANUAL
                  </Link>
                  : <></>}
                </Stack>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
