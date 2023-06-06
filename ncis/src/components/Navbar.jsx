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
  Text
  
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

import { COLORS } from '../constants/themes';;

const Navbar = () => {
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    NavBar
      </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
    </Menu>
  </Box>
  )
}

export default Navbar