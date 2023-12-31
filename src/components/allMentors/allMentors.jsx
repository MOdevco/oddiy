import { Box, Button, ButtonGroup, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import axios from 'axios'
import { api } from '../../api/api'
import ImageGet from '../image/image'
import groovyWalkAnimation2 from "../../Animation - 1703051368917.json" 
import Lottie from 'lottie-react'
const AllMentors = ({loading}) => {
    const [data , setData] = useState([])

    useEffect(() => {
        axios.get(`${api}api/mentors/` , {
            headers: {
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setData(res.data.data)
        })
    } ,[])

  return (
    <Box  minHeight={'100%'} bg={'#F0F2F5'} mt={10}>
        <Box display={'flex'}className='wrapper' p={10} justifyContent={'center'} gap={10} width={'100%'}  alignItems={'center'} flexDirection={'column'}>
            <Box>
                <Heading>Barcha mentorlar</Heading>
            </Box>

            {loading && <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'100%'}>
                <Box width={'200px'}>
                 <Lottie animationData={groovyWalkAnimation2} loop={true} />
                </Box>
            </Box>}
           {!loading && <Box display={'flex'} justifyContent={{base: 'center' , md: 'center'}} alignItems={'center'} gap={10} flexWrap={'wrap'}>
                {data.map((item,i) => (
                    <Card h={'100%'}>
                        <CardBody>
                            <ImageGet  id={item.employee.photo.id} />
                            <Stack mt='6' spacing='3'>
                            <Heading textAlign={'center'} size='md'>{item.employee.face.firstname} {item.employee.face.lastname}</Heading>
                            <Text textAlign={'center'} fontWeight={'500'} fontSize={'20px'}>
                               {item.courses.map((pre,i) => (
                                <Text color={'gray'}>
                                    {pre.courseType.name} Dashturchi
                                </Text>
                               ))}
                            </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Text  fontSize={'18px'} fontWeight={'500'}>
                               <span style={{color: 'orange' , fontWeight: 'bold'}}>Tajriba:</span> {item.employee.practice} yil
                            </Text>
                        </CardFooter>
                    </Card>
                ))}
            </Box>}

        </Box>
    </Box>
  )
}

export default AllMentors