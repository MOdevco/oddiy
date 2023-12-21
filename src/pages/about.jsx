import { Box, Button, Image, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { manku } from '../assets'
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

export default function About() {
  const [modalImg, setModalImg] = useState('')
  const [data , setData] = useState('')
  // console.log(data);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }



  useEffect(() => {
    axios.get(`${api}api/about-us/` , {
      headers: {
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
 

  return (
    <Box >
      <Box minHeight='70vh' display='flex' w={'100%'} alignItems='center' justifyContent='space-around' flexDirection={{md:'unset', base:'column'}} >
        {/* for mans picture  */}
        <Box>
          <Text color='#E9EAF0' fontSize='80px'>2023 - YIL</Text>
          <Text color='#1D2026' fontSize='48px'>{data.academyName}</Text>
          <Text color='#6E7485' width='535px' fontSize={'30px'}>{data.fullAboutUs}</Text>
        </Box>
        <Box>
          <Image src={`${api}api/image/?id=37`}></Image>
        </Box>
      </Box>

      <Box minHeight={'30vh'}>

      </Box>
      {/* for woman and man  */}
      <Box display='flex' alignItems='flex-start' mb={20} p={5} pb={20} justifyContent='space-around' bg='#FFEEE8' gap={20}  flexDirection={'column'} mt={{md:'0', base:'40px'}} >
        <Text color='#FF6636' fontSize='30px' fontWeight='500' >TASDIQLANGAN LITSENZIYA</Text>
        <Box display={'flex'} pl={20}>
          {data &&  data.licensePhotos.map((item ,i) => (
            <Box position={'relative'} zIndex={10}>
              <Image onClick={() => modal(item.id)} transform={i == 0 ? 'rotate(-20deg)'  : i == 2 ? 'rotate(20deg)' : ''} width={'300px'} height={'500px'} src={`${api}api/image/?id=${item.id}`} zIndex={i == 0 && 10}></Image>
            </Box>
          ))}
           
        

        <Modal onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay bg={'transparent'}/>
          <ModalContent>
            <ModalCloseButton fontSize={'30px'} />
            <ModalBody px={'20px'}>
              <Image w={'100%'} m={'auto'} h={'95vh'} src={modalImg} />
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Box>
      </Box>
      {/* for img  */}
      {/* <Box mt={20} display='flex' alignItems='center' gap={20} justifyContent='space-around' flexDirection={{md:'unset', base:'column'}} marginTop={{md:'0', base:'40px'}}>
        <Box>
          <Text color='#FF6636' fontSize={16} fontWeight={500}>Our Gallary</Text>
          <Text color='#1D2026' fontWeight={600} fontSize={40}>We’ve been here <br /> almost 17 years</Text>
          <Text width='424px' color='#4E5566' >Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.</Text>
          <Button bg='#FF6636' color='white' display='flex' alignItems='center' gap={2}>Join Our Team <FaArrowRight /> </Button>
        </Box>
        <Box>
          <img src={manku} width={500} alt="" />
        </Box>
      </Box> */}
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
