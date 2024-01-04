import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Img1, Img2, Img3, Img4 } from '../../assets'
import axios from 'axios'
import { api } from '../../api/api'

const Status = () => {
    const [data , setData] = useState([])
    // console.log(data.length);
    useEffect(() => {
        axios.get(`${api}api/course-type/` , {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setData(res.data.data)
        })
    } ,[])

  return (
   <Box display={'flex'} justifyContent={'center'}  alignItems={'center'} minHeight={'40vh'}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={5}>
            <Box>
                <Heading>Barcha kurs kategoriyalar</Heading>
            </Box>


            <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'} gap={10}> 
                {data.map((item , i) => (
                    <Box display={'flex'} p={'15px'} gap={5}  width={{base: '100%' , md: '312px'}} bg={'#EBEBFF'} alignItems={'center'}>
                        <Image width={'65px'} src={Img1 }></Image>
                        <Text>{item.name}</Text>
                    </Box>
                ))}
                {/* <Box display={'flex'} p={'15px'} gap={5}  width={{base: '100%' , md: '312px'}} bg={'#E0F7E1'} alignItems={'center'}>
                    <Image width={'65px'} src={Img2}></Image>
                    <Text color={'black'}>BACKEND</Text>
                </Box>
                <Box display={'flex'} p={'15px'} gap={5}  width={{base: '100%' , md: '312px'}} bg={'#FFF2E5'} alignItems={'center'}>
                    <Image width={'65px'} src={Img3}></Image>
                    <Text>MOBILE</Text>
                </Box> */}
            </Box>
        </Box>
   </Box>
  )
}

export default Status