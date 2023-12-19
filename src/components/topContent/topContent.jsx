import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import { Logo, Top } from '../../assets'
import { Link } from 'react-router-dom'

const TopContent = () => {
  return (
   <Box width={'100%'} h={'100%'} p={5} bg={'#F0F2F5'}>
        <Box display={'flex'} width={'100%'}className='wrapper' alignItems={'center'} flexDirection={{base: 'column' , md: 'row'}}  gap={10}justifyContent='space-between'>
            <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                <Box>
                    <Image src={Logo} w={{base: '100%' , md: '300px'}}></Image>
                </Box>
                <Heading fontSize={'50px'}>DataSpin Academy <br /> Barchasi biz bilan</Heading>
                <Text maxW={'500px'}>Bizda o’qish uchun o’zingizga tegishlik bo’lgan barcha ma’lumotlari bilgan holatda kursga yozilishingizni tavsiya qilamiz.</Text>
                <Button width={{base: '100%' , md: '300px'}} color={'white'} h={'50px'} bg={'orange'} _hover={{bg: 'orange.300'}}>Biz haqimzda</Button>
            </Box>
            


            <Box>
                <Image width={{base: '100%' , md: '1000px'}} src={Top}></Image>
            </Box>


        </Box>
   </Box>
  )
}

export default TopContent