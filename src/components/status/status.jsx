import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Img1, Img2, Img3, Img4 } from '../../assets'

const Status = () => {
  return (
   <Box display={'flex'} justifyContent={'center'}  alignItems={'center'} minHeight={'40vh'}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={5}>
            <Box>
                <Heading>Barcha kurs kategoriyalar</Heading>
            </Box>


            <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'} gap={10}> 
                <Box display={'flex'} p={'15px'} gap={5}  width={{base: '100%' , md: '312px'}} bg={'#EBEBFF'} alignItems={'center'}>
                    <Image width={'65px'} src={Img1}></Image>
                    <Text >FRONTEND</Text>
                </Box>
                <Box display={'flex'} p={'15px'} gap={5}  width={{base: '100%' , md: '312px'}} bg={'#E0F7E1'} alignItems={'center'}>
                    <Image width={'65px'} src={Img2}></Image>
                    <Text color={'black'}>BACKEND</Text>
                </Box>
                <Box display={'flex'} p={'15px'} gap={5}  width={{base: '100%' , md: '312px'}} bg={'#FFF2E5'} alignItems={'center'}>
                    <Image width={'65px'} src={Img3}></Image>
                    <Text>MOBILE</Text>
                </Box>
                {/* <Box display={'flex'} p={'15px'} gap={5}  width={{base: '100%' , md: '312px'}} bg={'#FFF0F0'} alignItems={'center'}>
                    <Image width={'65px'} src={Img4}></Image>
                    <Text >Mukammal o’sish</Text>
                </Box> */}
            </Box>
        </Box>
   </Box>
  )
}

export default Status