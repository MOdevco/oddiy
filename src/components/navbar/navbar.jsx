import { Box, Button, Heading, Image, Text, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '../../assets'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Box position={'fixed'} w={'100%'} zIndex={'100'} left={0} top={0}>
      <Box>
        {/* for top navigation */}
        <Box width={'100%'}  h={'52px'} bg={'#1D2026'} display={{base: 'none' , md: 'block'}}>
            <Box display={'flex'} color={'white'} gap={'40px'} fontSize={'18px'} justifyContent={'center'} alignItems={'center'} minH={'100%'}>
                <NavLink style={({isActive}) => {return{color: isActive ? 'orange' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={'/'}> Bosh sahifa </NavLink>
                <NavLink style={({isActive}) => {return{color: isActive ? 'orange' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={'/about'}> Biz haqimizda </NavLink>
                <NavLink style={({isActive}) => {return{color: isActive ? 'orange' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={'/news'}> Yangiliklar </NavLink>
                <NavLink style={({isActive}) => {return{color: isActive ? 'orange' : '' , fontWeight: isActive ? 'bold' : 'normal'}}} to={'/contact'}> Biz bilan a’loqa </NavLink>
            </Box>
        </Box>

         {/*for logo  */}
        <Box className='wrapper' display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
          <Box fontSize={'30px'} pr={5} display={{base: 'block' , md: 'none'}} position={'absolute'} right={0}>
            <HamburgerIcon ref={btnRef} colorScheme='teal' onClick={onOpen} />
              <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader></DrawerHeader>

                  <DrawerBody>
                     <Box display={'flex'} flexDirection={'column'}  color={'black'} gap={'40px'} fontSize={'18px'} justifyContent={'flex-start'} alignItems={'flex-start'} minH={'100%'}>
                        <NavLink to={'/'}> Bosh sahifa </NavLink>
                        <NavLink> Biz haqimizda </NavLink>
                        <NavLink to={'/news'}> Yangiliklar </NavLink>
                        <NavLink to={'/contact'}> Biz bilan a’loqa </NavLink>
                    </Box>
                  </DrawerBody>

                </DrawerContent>
              </Drawer>


          </Box>
        </Box>




      </Box>
    </Box>
  )
}

export default Navbar