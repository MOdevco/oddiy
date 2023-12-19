import { Box, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from 'react'
import { api } from '../../api/api'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay } from 'swiper/modules';

const TopSwiper = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${api}api/news/`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        }).then((res) => {
            setData(res.data.data);
        })
    }, [])
    console.log(data);
  return (
    <Box w={'100%'} h={'60vh'} >
        <Swiper
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
            <SwiperSlide>
                <Image src={`${api}api/image/?id=${item.photo.id}`}></Image>
                <Box w={'150px'} h={'30px'} bg={'orange'}  borderBottomLeftRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'} position={'absolute'} top={0} right={0} color={'#000'} fontWeight={'500'}>Yangiliklar</Box>
                <Box position={'absolute'} color={'#fff'} left={4} bottom={6} textAlign={'left'}>
                  <Text fontSize={'23px'} fontWeight={'700'}>{item.fullDesc}</Text>
                  <Text fontSize={'35px'} fontWeight={'700'}>{item.name}</Text>
                  <Text fontSize={'23px'} fontWeight={'700'}>{item.shortDesc}</Text>
                </Box>
            </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default TopSwiper