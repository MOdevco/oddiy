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
    <Box>
      <Box>
        {/* for top navigation */}
        <Box width={'100%'} h={'52px'} bg={'#1D2026'} display={{base: 'none' , md: 'block'}}>
            <Box display={'flex'} color={'white'} gap={'40px'} fontSize={'18px'} justifyContent={'center'} alignItems={'center'} minH={'100%'}>
                <NavLink to={'/'}> Bosh sahifa </NavLink>
                <NavLink> Kurslar </NavLink>
                <NavLink> Biz haqimizda </NavLink>
                <NavLink> Biz bilan a’loqa </NavLink>
            </Box>
        </Box>

         {/*for logo  */}
        <Box className='wrapper' display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
          <Box display={'flex'} alignItems={'center'} gap={'50px'}>
            <Link to={'/'}>
              <Box display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>
                <Image src={Logo} width={'250px'}></Image>
               
              </Box>
            </Link>
          </Box>
          <Box>
            <Heading  fontWeight={'bold'} fontSize={'40px'}>Academy</Heading>
          </Box>

          <Box  display={{base: 'none' , md: 'block'}}> 
            <Link to={'/register'}>
              <Button width={'182px'} h={'50px'} bg={'#564FFD'} _hover={{bg: '#164FFD'}} color={'white'}>
                Ro'yhatdan O'tish
              </Button>
            </Link>
          </Box>


          <Box fontSize={'30px'} pr={5} display={{base: 'block' , md: 'none'}}>
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
                        <NavLink> Kurslar </NavLink>
                        <NavLink> Biz haqimizda </NavLink>
                        <NavLink> Biz bilan a’loqa </NavLink>
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