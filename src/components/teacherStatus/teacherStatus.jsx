import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import TeacherStatusCard from '../teacherStatusCard/teacherStatusCard'
import { FaArrowRightLong } from 'react-icons/fa6'
import axios from 'axios'
import { api } from '../../api/api'

const TeacherStatus = () => {
    const [data , setData] = useState([])


    useEffect(() => {
        axios.get(`${api}api/employee/` , {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            console.log(res.data.data);
            setData(res.data.data)
        })
    } , [])

  return (
   <Box position={'relative'} top={'-250px'}>
        <Box bg={'white'} border={'1px'} p={'20px'} display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'}  borderColor={'#E9EAF0'}  className='wrapper'>
            <Box display={'flex'} flexDirection={'column'} gap={'20px'} alignItems={'center'}>
                <Box>
                    <Heading>
                        O’qituvchilar holati
                    </Heading>
                </Box>


                {data.map((item , i) => (
                    <Box display={'flex'} key={i} justifyContent={'space-evenly'} flexWrap={'wrap'} gap={'20px'} w={'100%'}>
                        <TeacherStatusCard item={item} />
                        <TeacherStatusCard item={item} />
                    </Box>
                ))}


                <Box display={'flex'}gap={4}  alignItems={'center'}>
                    <Text color={'gray'} fontSize={'17px'}>Barcha Kurslar bilan tanishish uchun</Text>
                    <Text color={'#564FFD'} fontWeight={'bold'} cursor={'pointer'} display={'flex'} alignItems={'center'} gap={'5px'}>Tanishish <FaArrowRightLong fontSize={'20px'} className='right' /></Text>
                </Box>



            </Box>
        </Box>
   </Box>
  )
}

export default TeacherStatus