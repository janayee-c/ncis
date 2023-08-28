import React, { useState, useRef, useEffect } from 'react';
import '../styles/Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { Sling as Hamburger} from 'hamburger-react';
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
  DrawerOverlay,
} from '@chakra-ui/react';

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

  const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0 && isHamburgerToggled) {
      setIsHamburgerToggled(false); //when not in original position, toggle is set as false 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHamburgerToggled]);

  return (
    <>
    <Box display="flex"
        w="100%"
        backgroundColor="#F5F5F5"
        height="23vh"
        fontSize="40px"
        position="relative"  
        className="navbar-box"
        flexDirection='row-reverse'>

<IconButton
          ref={btnRef}
          icon={<Hamburger

            onToggle={(toggled) => {
              setIsHamburgerToggled(toggled);
              if (toggled) {
                onOpen();
              } else {
                onClose();
              }
            }}

            toggled={isHamburgerToggled} 
          />}
          edge="end"
          onMouseEnter={onOpen}
          zIndex={isTopDrawer ? 1 : 9999}
          onClick={isOpen ? onClose : onOpen}
          right={isTopDrawer? 'auto' : '-1em'}
          marginTop='0.5em'
          variant="unstyled"
          color="black"
          size={isTopDrawer ? 'xl' : 'sm'}
          aria-label="Open Dropdown"
          className="centered-icon"
        />
        <Box
        display="flex"
        w="100%"
        backgroundColor="#F5F5F5"
        height="23vh"
        justifyContent="space-between"
        alignItems="center"
        fontSize="40px"
        position="relative"
        flexDirection={isTopDrawer ? 'row-reverse' : 'column'}  
        marginTop={isTopDrawer ? '0' : '1em'}
        marginLeft='1.2em'
      >

        <Img id="logo" src={Logo} />
      

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
                  spacing={0.8}
                  textAlign="center"
                  justifyContent="center"
                  verticalAlign="flex-end"
                  marginTop={isTopDrawer ? '0' : '4vh'}
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
      </Box>
    </>
  );
};

export default Navbar;
