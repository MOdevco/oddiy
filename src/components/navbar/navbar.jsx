import { Box, Button, Heading, Image, Text, useDisclosure } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
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
import useProgres from '../../hooks/useProgres'

import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const completion = useProgres()
  const [pre , setPre] = useState(false)


  return (
    <Box position={'fixed'} w={'100%'} zIndex={'100'} left={0} top={0}>
      {!pre && <Text  position={'absolute'} bg={'orange'} className={'shadow'} width={'100%'} height={'5px'} style={{transform: `translateX(${completion - 100}%)`}}></Text>}
      <Box>
        {/* for top navigation */}
        <Box width={'100%'}  h={'78px'} bg={'#1D2026'} display={{base: 'none' , md: 'block'}} >
          <Box  display={'flex'} color={'white'}  alignItems={'center'} justifyContent={'space-between'} className='wrapper' >
            <Box display={'flex'} color={'white'} gap={'40px'} fontSize={'18px'} justifyContent={'flex-start'}  alignItems={'center'} minH={'100%'}>
                <NavLink style={({isActive}) => {return{borderTopWidth: isActive ? '2px' : '' , borderTopColor: isActive ? '#FF6636' : '' , borderTopStyle: isActive ? 'solid' : '' }}}  to={'/home'}><Text pt={5}>Bosh sahifa</Text></NavLink>
                <NavLink style={({isActive}) => {return{borderTopWidth: isActive ? '2px' : '' , borderTopColor: isActive ? '#FF6636' : '' , borderTopStyle: isActive ? 'solid' : '' }}} to={'/about'}><Text pt={5}> Biz haqimizda</Text> </NavLink>
                <NavLink style={({isActive}) => {return{borderTopWidth: isActive ? '2px' : '' , borderTopColor: isActive ? '#FF6636' : '' , borderTopStyle: isActive ? 'solid' : '' }}} to={'/myCourse'}><Text pt={5}>Profil</Text> </NavLink>
            </Box>

            <Box>
            </Box>

          </Box>
        </Box>

         {/*for logo  */}
        <Box className='wrapper' display={'flex'} alignItems={'center'} justifyContent={'space-between'} pt={1} pb={2}  h={'5vh'}>
          <Box fontSize={'30px'} pr={5} display={{base: 'block' , md: 'none'}} alignItems={'flex-end'} justifyContent={'flex-end'} position={'absolute'} right={0} bg={'white'} width={'100%'}>
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
                        <NavLink  to={'/home'}> Bosh sahifa </NavLink>
                        <NavLink to={'/about'}> Biz haqimizda </NavLink>
                        {/* <NavLink to={'/contact'}> Biz bilan a’loqa </NavLink> */}
                        <Link to={'/myCourse'}>
                          <Button>Mening kurslarim</Button>
                        </Link>
                    </Box>
                    <Box>
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