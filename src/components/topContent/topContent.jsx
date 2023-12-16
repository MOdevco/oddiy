import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import { Top } from '../../assets'
import { Link } from 'react-router-dom'

const TopContent = () => {
  return (
   <Box>
        <Box display={'flex'} width={'100%'} alignItems={'center'} flexDirection={{base: 'column' , md: 'row'}}  gap={10}justifyContent='space-between'>
            <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                <Heading fontSize={'50px'}>DataSpin Academy <br /> Barchasi biz bilan</Heading>
                <Text maxW={'500px'}>Bizda o’qish uchun o’zingizga tegishlik bo’lgan barcha ma’lumotlari bilgan holatda kursga yozilishingizni tavsiya qilamiz.</Text>
            </Box>
            


            <Box>
                <Image width={{base: '100%' , md: '1000px'}} src={Top}></Image>
            </Box>


        </Box>
   </Box>
  )
}

export default TopContent