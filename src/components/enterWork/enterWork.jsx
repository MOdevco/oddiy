import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Work } from '../../assets'
import { FaArrowRightLong } from 'react-icons/fa6'
import { color } from 'framer-motion'
import { Link } from 'react-router-dom'

const EnterWork = () => {
  return (
   <Box bg={'#F5F7FA'} width={'100%'} minHeight={'50vh'} p={'20px'}>
        <Box className='wrapper' display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box className='Responsive' display={'flex'} alignItems={'center'} gap={'20px'} justifyContent={'space-evenly'} width={{base: '100%' , md: '75%'}}>
                <Box className='bgImg' width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'self-start'} gap={'20px'} p={'20px'} color={'white'}  bg={'#564FFD'}>
                    <Heading>Malumotlar To’iq holda</Heading>
                    <Text maxW={'400px'}>Agarda siz shartlarga to’g’ri kelgan holatda malumotlaringiz yetarli bo’lsa bizga arizani berishingiz mumkin bo’ladi.</Text>
                    <Link to={'/aplication'}>
                        <Button _hover={{bg: ''}} bg={'white'}  display={'flex'} alignItems={'center'} gap={2 } color={'#564FFD'}>Ariza Qoldirish       <FaArrowRightLong fontSize={'20px'} className='right' /></Button>
                    </Link>
                </Box>


                <Box className='bgImg' width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'self-start'} gap={'20px'} p={'20px'} color={'black'} bg={'#ffff'}>
                    <Heading >Ishga kirish uchun tanishing</Heading>

                    <Box display={'flex'} flexDirection={'column'} gap={10}>
                        <Box display={'flex'} justifyContent={'space-between'} flexDirection={{base: 'column' , md: 'row'}} alignItems={{base: 'flex-start' , md: 'center'}} gap={5} width={'100%'}>
                            <Box display={'flex'} alignItems={'center'} gap={2}>
                                <Heading width={'50px'} h={'50px'} bg={'#EBEBFF'} textAlign={'center'} rounded={'50%'} color={'#564FFD'}>1</Heading>
                                <Text fontSize={'18px'} fontWeight={'500'}>Yonalish sertifikati</Text>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} gap={2}>
                                <Heading width={'50px'} h={'50px'} bg={'#FFF0F0'} textAlign={'center'} rounded={'50%'} color={'#FF6636'}>2</Heading>
                                <Text fontSize={'18px'} fontWeight={'500'}>Yoshingiz 18dan <br /> katta bo’lish</Text>
                            </Box>
                        </Box>

                        <Box display={'flex'} justifyContent={'space-between'} flexDirection={{base: 'column' , md: 'row'}} alignItems={{base: 'flex-start' , md: 'center'}} gap={5} width={'100%'}>
                            <Box display={'flex'} alignItems={'center'} gap={2}>
                                <Heading width={'50px'} h={'50px'} bg={'#FFF0F0'} textAlign={'center'} rounded={'50%'} color={'#E34444'}>3</Heading>
                                <Text fontSize={'18px'} fontWeight={'500'}>Dars o’tish metidikasi</Text>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} gap={2}>
                                <Heading width={'50px'} h={'50px'} bg={'#E1F7E3'} textAlign={'center'} rounded={'50%'} color={'#23BD33'}>4</Heading>
                                <Text fontSize={'18px'} fontWeight={'500'}>2 yildan oshiq tajriba</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
   </Box>
  )
}

export default EnterWork