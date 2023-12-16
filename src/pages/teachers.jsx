import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import TeacherCard from '../components/teacherCard/teacherCard'

const Teachers = () => {


  useEffect(() => {
    window.scroll(0,0)
} , [])
  return (
    <Box minH={'100vh'} width={'100%'} bg={'#F5F7FA'}p={'20px'}>
         <Box className='wrapper' width={'100%'} display={'flex'} gap={5} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}  p={'20px'}>
            <Box>
                <Heading>Bizdagi O’qituvchilar</Heading>
            </Box>

            <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} width={'100%'} gap={'20px'} flexWrap={'wrap'}>
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
            </Box>


           
        </Box>
    </Box>  
  )
}

export default Teachers