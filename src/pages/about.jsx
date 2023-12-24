import { Box, Button, Heading, Image, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { FaArrowRight } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import axios from 'axios';
import { api } from '../api/api';
import ImageGet from '../components/image/image';

// import React, { useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Autoplay,  Navigation } from "swiper/modules";
import '../../src/about.css'
export default function About() {
  const [modalImg, setModalImg] = useState('')
  const [data , setData] = useState('')
  console.log(data);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }



  useEffect(() => {
    axios.get(`${api}api/about-us/` , {
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {
      setData(res.data.data)
    })
  } ,[])

//   useEffect(() => {
//     window.scroll(0,0)
// } ,[])
const modal = (id) => {
    setModalImg(`${api}api/image/?id=${id}`)
    handleSizeClick('full')
}
// src={`${api}api/image/?id=${pre.id}`}

  return (
    <Box >
      <Box minHeight='70vh' display='flex' w={'100%'} alignItems='center' justifyContent='space-around' flexDirection={{md:'unset', base:'column'}} >
        {/* for mans picture  */}
        <Box mx={40}>
          <Text color='#E9EAF0' fontSize='80px'>2023 - YIL</Text>
          <Text color='#1D2026' fontSize='48px'>{data.academyName}</Text>
          <Text color='#6E7485' width='535px' fontSize={'30px'}>{data.fullAboutUs}</Text>
        </Box>
        <Box mr={40}>
          <Image borderRadius={'10px'} width={'100%'} height={'600px'} src={`${api}api/image/?id=37`}></Image>
        </Box>
      </Box>

      <Box minHeight={'30vh'} display={'flex'}  pt={15} alignItems={'center'} justifyContent={'center '}>

        <Swiper
          slidesPerView={3}
          spaceBetween={'-170px'}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 2,
          //     spaceBetween: 20,
          //   },
          //   768: {
          //     slidesPerView: 4,
          //     spaceBetween: 40,
          //   },
          //   1024: {
          //     slidesPerView: 5,
          //     spaceBetween: 50,
          //   },
          // }}
          modules={[Pagination , Autoplay , Navigation]}
        >
          {data && data.additionalPhoto.map((pre) => (
            <SwiperSlide>
              <Image onClick={() => modal(pre.id)} objectFit={'cover'} borderRadius={'10px'} src={`${api}api/image/?id=${pre.id}`} width={'520px'} height={'276px'} ></Image>
            </SwiperSlide>  
          ))}

        </Swiper>
      </Box>


      {/* for woman and man  */}
      <Box display='flex' alignItems='center' p={20} px={40}  className='borderTop' justifyContent='space-around' bg='#FFEEE8' gap={20}  flexDirection={'column'} mt={{md:'50px', base:'40px'}} >
        <Box display={'flex'} alignItems={'center'} >
          {data &&  data.licensePhotos.map((item ,i) => (
            <Box >
              <Image onClick={() => modal(item.id)} ml={i===1 ? '200px' : ''} right={i===2 ? '200px' :''}  top={i===2 ? '-10px' :''}  style={{transform: i===1 ? 'rotate(-30deg)' : '' , paddingLeft: i===2 ? '-500px' : ''}} position={'relative'}  width={'300px'} height={'400px'} src={`${api}api/image/?id=${item.id}`} ></Image>
            </Box>
          ))}
          <Box>
            <Heading color={'orange'} fontSize={'24px'}>Rasmiylik identifikatori</Heading>
            <Heading fontSize={'40px'}>DataSpin Academy <br /> o'z ishini rasmiy tartibda olib boradi.</Heading>
          </Box>
          

        <Modal onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay bg={'transparent'}/>
          <ModalContent>
            <ModalCloseButton fontSize={'30px'} />
            <ModalBody px={'20px'}>
              <Image w={'100%'} m={'auto'} h={'100%'} src={modalImg} />
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Box>
      </Box>
      {/* for img  */}

      {/* for cards  */}
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection={{md:'unset', base:'column'}}>
          {/* card  */}
          <Box display='flex' flexDirection='column' width={600} padding={20}>
            <Box  bg='#F5F7FA' padding={10}>
            <Text><RiDoubleQuotesL size={30} color='#FF6636'/></Text>
            <Text fontSize='18px' color='#1D2026' width='376px' fontWeight={400} px={10}>Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.</Text>
            <Text display='flex' alignItems='end' justifyContent='end'><RiDoubleQuotesL size={30} color='#FF6636'/></Text>
            </Box>
           <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
           <Text color='1D2026' >Sundar Pichai</Text>
            <Text color='#6E7485' fontSize='14px' display='flex' alignItems='center' gap='6px'>Chief Chairman of <Text color='#564FFD' fontSize='14px'>Google</Text></Text>
           </Box>
          </Box>
          {/* 2 */}
          <Box display='flex' flexDirection='column' width={600} padding={20}>
            <Box  bg='#F5F7FA' padding={10}>
            <Text><RiDoubleQuotesL size={30} color='#FF6636'/></Text>
            <Text fontSize='18px' color='#1D2026' width='376px' fontWeight={400} px={10}>Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.</Text>
            <Text display='flex' alignItems='end' justifyContent='end'><RiDoubleQuotesL size={30} color='#FF6636'/></Text>
            </Box>
           <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
           <Text color='1D2026' >Sundar Pichai</Text>
            <Text color='#6E7485' fontSize='14px' display='flex' alignItems='center' gap='6px'>Chief Chairman of <Text color='#564FFD' fontSize='14px'>Google</Text></Text>
           </Box>
          </Box>
          {/* 3 */}
          <Box display='flex' flexDirection='column' width={600} padding={20}>
            <Box  bg='#F5F7FA' padding={10}>
            <Text><RiDoubleQuotesL size={30} color='#FF6636'/></Text>
            <Text fontSize='18px' color='#1D2026' width='376px' fontWeight={400} px={10}>Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.</Text>
            <Text display='flex' alignItems='end' justifyContent='end'><RiDoubleQuotesL size={30} color='#FF6636'/></Text>
            </Box>
           <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
           <Text color='1D2026' >Sundar Pichai</Text>
            <Text color='#6E7485' fontSize='14px' display='flex' alignItems='center' gap='6px'>Chief Chairman of <Text color='#564FFD' fontSize='14px'>Google</Text></Text>
           </Box>
          </Box>
        </Box>
    </Box>
  )
}
