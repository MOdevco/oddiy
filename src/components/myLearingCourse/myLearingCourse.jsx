import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, Divider, ButtonGroup, Button, Heading, Box, Avatar } from '@chakra-ui/react'
import { Teacher } from '../../assets'
import axios from 'axios'
import { api } from '../../api/api'
import Lottie from 'lottie-react'
import groovyWalkAnimation2 from "../../Animation - 1703051368917.json" 
const MyLearingCourse = () => {
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${api}api/reception/by-user` , {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            console.log(res.data.data);
            setData(res.data.data)
            setLoading(false)
        })
    } , [])


  return (
    <Box  p={5} display={'flex'}  gap={5}  flexWrap={'wrap'} >
        <Box  width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'100%'}>
            {loading && <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'100%'}>
                <Box width={'200px'}>
                 <Lottie animationData={groovyWalkAnimation2} loop={true} />
                </Box>
            </Box>}
        </Box>
        {!loading && data.map((item , i) => (
            <Card maxW='sm'  className='zigzak' borderBottom={'none'} rounded={'0'} mt={10}>
                <Box textAlign={'center'} fontSize={'20px'} rounded={'8px'} fontWeight={'400'} pt={1} width={'100%'}>
                    Reg-no: <br /> {item.receptionNumber}
                </Box>
                <CardBody>
                    <Image
                    src={`${api}api/image/?id=${item.coursePhoto.id}`}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' fontWeight={'500'}>Kurs nomi: {item.courseName}</Heading>
                        <Heading size='md' fontWeight={'500'}>Kurs turi: {item.courseType.name}</Heading>
                        <Heading size='md' fontWeight={'500'}>Kurs kimlar uchun: {item.courseFor.name}</Heading>
                        <Text size='md' fontWeight={'500'}>Ma'lumot: {item.courseType.description}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter display={'flex'} alignItems={'center'}  gap={2} flexDirection={{base: 'column' , md: 'row'} }>
                    <Avatar  src={`${api}api/image/?id=${item.coursePhoto.id}`} />
                    <Text fontWeight={'700'} fontSize={'20px'}>{item.userInfo.firstname}</Text>
                    <Text fontWeight={'700'} fontSize={'20px'}>{item.userInfo.lastname}</Text>
                </CardFooter>
            </Card>
        ))}
    
    </Box>
  )
}

export default MyLearingCourse