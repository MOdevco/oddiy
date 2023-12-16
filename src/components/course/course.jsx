import { Box, Heading, Text } from '@chakra-ui/react'
import CourseCards from '../courseCards/courseCards'
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react'
import { api } from '../../api/api';
const Course = () => {

    const [data , setData] = useState([])
    const [more , setMore] = useState(4)
    const [loader , setLoader] = useState(true)
    useEffect(() => {
        axios.get(`${api}api/course/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => {
            setData(res.data.data);
            setLoader(false)
        })
    } , [])


  return (
    <Box bg={'#F5F7FA'} width={'100%'} p={'20px'} pb={'300px'}>
        <Box display={'flex'}  className='wrapper' gap={'20px'}flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

            <Box>
                <Heading>Bizda Mavjud Kurslar</Heading>
            </Box>

           {loader && <Box>
                <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                />
            </Box>}
           {!loader && <Box display={'flex'} width={'100%'} className='cardResponsive' gap={'40px'} justifyContent={'space-evenly'}>
                {data.slice(0 ,more).map((item , i) => (
                    <Box key={i}>
                        <CourseCards item={item} />
                    </Box>
                ))}
            </Box>}

            <Box display={'flex'}gap={4}  alignItems={'center'}>
                <Text color={'gray'} fontSize={'17px'}>Barcha Kurslar bilan tanishish uchun</Text>
                <Text color={'#564FFD'} fontWeight={'bold'} cursor={'pointer'} display={'flex'} alignItems={'center'} gap={'5px'}>Tanishish <FaArrowRightLong fontSize={'20px'} className='right' /></Text>
            </Box>



        </Box>
    </Box>
  )
}

export default Course