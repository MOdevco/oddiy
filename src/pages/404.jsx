import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { NoteFountImg } from '../assets';
const NoteFount = () => {
  return (
    <Box minHeight={'60.7vh'} width={'100%'}>
        
        <Box  display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box display={'flex'} width={'100%'} justifyContent={'space-evenly'} flexDirection={{base: 'column' , md: 'row'}} alignItems={'center'} >
                <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={2}>
                    <Heading fontSize={'100px'} color={'gray.200'}>Error 404</Heading>
                    <Heading fontSize={'50px'}>Nimadur Xato!</Heading>
                    <Text maxW={'400px'}>Siz mavjud bo'lmagan sahifaga tashrif buyurdingiz. Agarda sizga nimadur kerak bo'lsa bosh sahifaga qayting.</Text>
                    <Link to={'/'}>
                        <Button display={'flex'} alignItems={'center'} gap={2} bg={'#564FFD'} color={'white'} _hover={{bg: ''}} _active={{bg: ''}}><FaArrowLeft /> Bosh sahifa</Button>
                    </Link>
                </Box>


                <Box>
                    <Image width={{base: '100%' , md: '700px'}} src={NoteFountImg}></Image>
                </Box>
            </Box>
        </Box>

    </Box>
  )
}

export default NoteFount