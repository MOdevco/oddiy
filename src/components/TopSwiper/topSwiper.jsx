import { Box, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from 'react'
import { api } from '../../api/api'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import groovyWalkAnimation2 from "../../Animation - 1703051368917.json" 
import { Autoplay } from 'swiper/modules';
import Lottie from 'lottie-react'

const TopSwiper = () => {
    const [data, setData] = useState([])
    const [loading , setLoading] = useState(true)
    useEffect(() => {
        axios.get(`${api}api/news/`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        }).then((res) => {
            setData(res.data.data);
            setLoading(false)
        })
    }, [])
    console.log(data);
  return (
    <Box w={'100%'} h={'60vh'} >
        {!loading && <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'100%'}>
          <Box width={'200px'}>
           <Lottie animationData={groovyWalkAnimation2} loop={true} />
          </Box>
        </Box>}
      <Box width={'100%'} h={'100%'} bg={'black'} className='swipperBG'>
        {loading && <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {data.map((item) => (
              <SwiperSlide className='slider'>
                  <Image src={`${api}api/image/?id=${item.photo.id}`}></Image>
                  <Box w={'150px'} h={'30px'} bg={'orange'}  borderBottomLeftRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'} position={'fixed'} top={0} right={0} color={'#000'} fontWeight={'500'}>Yangiliklar</Box>
                  <Box position={'absolute'} color={'#fff'} left={4} bottom={6} textAlign={'left'}>
                    <Text fontSize={'40px'} fontWeight={'700'}>{item.name}</Text>
                    <Text fontSize={'30px'} fontWeight={'700'}>{item.fullDesc}</Text>
                    <Text fontSize={'30px'} fontWeight={'700'}>{item.shortDesc}</Text>
                  </Box>
              </SwiperSlide>
          ))}
        </Swiper>}
        fdg
      </Box>
    </Box>
  )
}

export default TopSwiper
