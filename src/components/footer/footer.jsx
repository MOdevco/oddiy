import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Logo, Logo2 } from '../../assets'

const Footer = () => {
  return (
    <Box  w={'100%'} bg={'#1D2026'}  p={'20px'}>
      <Box className='wrapper'>
          <Box  display={'flex'} alignItems={{base: 'flex-start' , md: 'center'}} justifyContent={'space-between'} gap={5} flexDirection={{base: 'column' , md: 'row'}}>
              <Box display={'flex'} flexDirection={'column'} gap={5}>
                <Box display={'flex'}alignItems={'flex-start'} flexDirection={'column'} >
                  <Image w={'250px'} src={Logo}></Image>
                </Box>

                <Box>
                  <Button h={'50px'} width={{base: '100%' , md: '300px'}} bg={'#564FFD'} color={'white'} _hover={{bg: ''}}>Biz bilan bog'lanish</Button>
                </Box>


              </Box>

            <Box display={'flex'} alignItems={'center'} flexDirection={{base: 'column' , md: 'row'}} gap={{base: '30px' , md: '100px'}}>
              <Box color={'white'} fontSize={'20px'}>
                <Heading color={'#564FFD'}>60+</Heading>
                <Text color={'gray'}>O'quvchilar</Text>
              </Box>
              <Box color={'white'} fontSize={'20px'}>
                <Heading color={'#FF6636'}>20+</Heading>
                <Text color={'gray'}>YO'nalishlar</Text>
              </Box>
              <Box color={'white'} fontSize={'20px'}>
                <Heading>10+</Heading>
                <Text color={'gray'}>Ish o'rinlari</Text>
              </Box>
            </Box>

          </Box>


      </Box>
    </Box>
  )
}

export default Footer