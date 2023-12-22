import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../api/api'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import ImageGet from '../components/image/image'
const ReseptionCourse = () => {
    const {id} = useParams(null)
    const url = `${api}api/course/by/?id=${id}`
    const [data , setData ] = useState(null)
    useEffect(() => {
        axios.get(url ,{
            headers: {
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            setData(res.data.data)
        })
    } , [url])
  return (
    <Box minHeight={'70vh'} className='wrapper' width={'100%'}>
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
        <ImageGet id={data && data.course.previewPhoto.id} /> 
        <Stack>
            <CardBody>
            <Heading fontWeight={'500'} size='md'>Kurs nomi: {data && data.course.name} </Heading>
            <Heading fontWeight={'500'} size='md'>Kurs turi: {data && data.course.courseType.name} </Heading>
            <Heading fontWeight={'500'} size='md'>Kurs kimlar uchun?: {data && data.course.courseFor.name} </Heading>
            <Heading fontWeight={'500'} size='md'>Kurs narxi: {data && data.price} ming so'm </Heading>

            <Text py='2'>
                Caffè latte is a coffee beverage of Italian origin made with espresso
                and steamed milk.
            </Text>
            </CardBody>

            <CardFooter>
            <Button variant='solid' colorScheme='blue'>
                Buy Latte
            </Button>
            </CardFooter>
        </Stack>
        </Card>

    </Box>
  )
}

export default ReseptionCourse