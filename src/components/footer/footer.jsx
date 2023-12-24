import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Logo, Logo2 } from '../../assets'
import { FaTelegramPlane } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";

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
                  <Text fontSize={'20px'} color={'gray'}>Bizni ichtimoiy tarmoqlarda kuzating.</Text>
                </Box>

                <Box display={'flex'} gap={3}>
                  <Box display={'flex'} alignItems={'center'} className='hoverInfo' justifyContent={'center'}minHeight={'100%'} width={'50px'} h={'50px'} bg={'#363B4766'}><FaTelegramPlane fontSize={'30px'} color='white' /></Box>
                  <Box display={'flex'} alignItems={'center'} className='hoverInfo' justifyContent={'center'}minHeight={'100%'} width={'50px'} h={'50px'} bg={'#363B4766'}><CiInstagram  fontSize={'30px'} color='white' /></Box>
                  <Box display={'flex'} alignItems={'center'} className='hoverInfo' justifyContent={'center'}minHeight={'100%'} width={'50px'} h={'50px'} bg={'#363B4766'}><AiOutlineYoutube fontSize={'30px'} color='white' /></Box>

                </Box>


              </Box>

            <Box display={'flex'} alignItems={'center'} flexDirection={{base: 'column' , md: 'row'}} gap={{base: '30px' , md: '100px'}}>
             
            </Box>

          </Box>


      </Box>
    </Box>
  )
}

export default Footer