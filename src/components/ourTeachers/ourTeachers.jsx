import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import TeacherCard from '../teacherCard/teacherCard'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const OurTeachers = () => {



    useEffect(() => {
        window.scroll(0,0)
    } , [])
  return (
    <Box position={'relative'} top={{base: '-140px' , md: '-330px'}}>

        <Box className='wrapper' width={'100%'} display={'flex'} gap={5} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} bg={'white'} border={'1px'} borderColor={'#E9EAF0'} p={'20px'}>
            <Box>
                <Heading>Bizdagi O’qituvchilar</Heading>
            </Box>

            <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} width={'100%'} flexWrap={'wrap'}>
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
            </Box>


            <Box display={'flex'}gap={4}  alignItems={'center'}>
                <Text color={'gray'} fontSize={'17px'}>Barcha Kurslar bilan tanishish uchun</Text>
                <Link to={'/teachers'}>
                    <Text color={'#564FFD'} fontWeight={'bold'} cursor={'pointer'} display={'flex'} alignItems={'center'} gap={'5px'}>Tanishish <FaArrowRightLong fontSize={'20px'} className='right' /></Text>
                </Link>
            </Box>
        </Box>
    </Box>
  )
}

export default OurTeachers