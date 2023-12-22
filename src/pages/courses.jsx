import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { api } from '../api/api'
import axios from 'axios'
import ImageGet from '../components/image/image'
import { Link } from 'react-router-dom'
const Courses = () => {
  const [data , setData] = useState([])
  const [pric , setPric] = useState(true)
  const url = `${api}api/course/with-prices/`

  useEffect(() => {
    axios.get(url , {
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {
      setData(res.data.data)
    })
  } ,[url])




  useEffect(() => {
    window.scroll(0,0)
}, [])
  return (
    <Box minHeight={'100vh'} width={'100%'} className='wrapper'>
      <Box mt={10}>
          <Box display={'flex'} justifyContent={'center'}  alignItems={'center'}>
            <Heading>Bizning kurslar</Heading>
          </Box>

        <Box mt={10} display={'flex'} flexWrap={'wrap'} gap={10}>
          {data.map((item , i) => (
            <Link to={`/reseptionCourse/${item.course.id}`} key={i}>
              <Card maxW='sm' width={'500px'}  overflow={'auto'}>
                <CardBody>
                  <ImageGet id={item.course.previewPhoto.id} />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md' fontWeight={'500'}>Kurs nomi:  {item.course.name}</Heading>
                    <Heading size='md' fontWeight={'500'}>Kurs turi:  {item.course.courseType.name}</Heading>
                    <Heading size='md' fontWeight={'500'}>Kurs kimlar uchun:  {item.course.courseFor.name}</Heading>
                    <Text>
                    {item.course.courseFor.description}
                    </Text>
                      <Text color='blue.600' fontSize='2xl'>
                        {pric && <span> {item.price} ming so'm</span>}<br />
                      </Text>
                  </Stack>
                </CardBody>
              </Card>
            </Link>
          ))}
        </Box>
          
      </Box>
    </Box>
  )
}

export default Courses