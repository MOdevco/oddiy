import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Img1, Img2, Img3, Img4 } from '../../assets'
import axios from 'axios'
import { api } from '../../api/api'
import Lottie from 'lottie-react'
import groovyWalkAnimation2 from "../../Animation - 1703051368917.json" 

const Status = () => {
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${api}api/course-type/` , {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setData(res.data.data)
            setLoading(false)
        })
    } ,[])

  return (
   <Box display={'flex'} justifyContent={'center'}  alignItems={'center'} minHeight={'40vh'}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={5}>
            <Box>
                <Heading>Barcha kurs kategoriyalar</Heading>
            </Box>

            {loading && <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'100%'}>
                <Box width={'200px'}>
                 <Lottie animationData={groovyWalkAnimation2} loop={true} />
                </Box>
            </Box>}


           {!loading && <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'} gap={10}> 
                {data.map((item , i) => (
                    <Box display={'flex'} p={'15px'} gap={5}  width={{base: '100%' , md: '312px'}} bg={'#EBEBFF'} alignItems={'center'}>
                        <Image width={'65px'} src={Img1 }></Image>
                        <Text>{item.name}</Text>
                    </Box>
                ))}
            </Box>}
        </Box>
   </Box>
  )
}

export default Status