import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
// import NewsCards from '../components/newsCards/newsCards'
import axios from 'axios'
import { api } from '../api/api'

const News = () => {

    // const [data , setData] = useState([])


    // useEffect(() => {
    //     axios.get(`${api}api/news/` , {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem('token')}`
    //         }
    //     }).then((res) => {
    //         setData(res.data.data)
    //     })
    // } , [])
  return (
    <Box minHeight={'100vh'}>
        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={10} alignItems={'center'} mt={10}>
            <Box>
                <Heading>Barcha yangiliklardan xabardor bo'ling</Heading>
            </Box>

            <Box > 
                {/* <NewsCards data={data} /> */}
            </Box>
        </Box>
    </Box>
  )
}

export default News