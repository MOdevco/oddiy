import { Avatar, Box, Button, ButtonGroup, Divider, Heading, Image, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { api } from '../../api/api'
import { Badge } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
  } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import axios from 'axios'
import Lottie, { useLottie } from 'lottie-react'
import groovyWalkAnimation from "../../Animation - 1702976632892.json" 
import { IoMdClose } from "react-icons/io";
const AllCourse = ({data}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [courseId , setCourseId] = useState('')
    const [value , setValue] = useState('')
    const [response , setResponse] = useState('')
    const date = new Date()
    const day = date.getDate()
    const mon = date.getMonth() + 1
    const year = date.getFullYear()
    const h = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()
    const ms = date.getMilliseconds()
    const [vr , setVr] = useState(false)
    // const options = {
    //     animationData: groovyWalkAnimation,
    //     loop: true
    // };
    // const { View } = useLottie(options);


    const handleSubmit = () => {
        axios.post(`${api}api/reception/new`,{
            "courseID": courseId,
            "description": value,
            "receptionNumber": `${day}${mon}${year}${h}${m}${s}${ms}`
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            setResponse(res.data.message)
            onClose()
            setVr(true)
            // setTimeout(() => {
            //     setVr(false)
            // },3000)
        })
    }

  return (
    <Box width={'100%'} height={'100%'} p={20} bg={'#F0F2F5'}>
        <Box className='wrapper' display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Box>
                <Heading>Bizdagi mavjud barcha kurslar</Heading>
            </Box>

           {vr && <Box position={'fixed'} width={'100%'} zIndex={10}display={'flex'} alignItems={'center'} height={'100vh'} top={0}justifyContent={'center'}  left={0} className='verify'> 
                <Box  width={'400px'} h={'400px'} p={10} textAlign={'center'} fontWeight={'500'} fontSize={'18px'} bg={'white'} position={'relative'} rounded={'8px'}>
                    <Box position={'absolute'} onClick={() => {
                        setVr(false)
                    }} right={2} top={1} fontSize={'30px'}>
                        <IoMdClose />
                    </Box>
                    <Text>{response}</Text>
                    <Lottie animationData={groovyWalkAnimation} loop={false} />
                </Box>
            </Box>}

            <Box pt={10} display={'flex'} flexWrap={'wrap'} justifyContent={'center'} width={'100%'} gap={{base: 20 , md: 10}} >
                {data.map((item , i) => {
                    if(item.course.status === true) 
                        return (
                        <Box>
                            <Card maxW='sm' cursor={'pointer'} className='CardEffect' width={'100%'} position={'relative'}>
                                <CardBody position={'relative'}>
                                    <Image src={`${api}api/image/?id=${item.course.previewPhoto.id}`}
                                    className='cardImg'
                                    width={'100%'}
                                    h={'250px'}
                                    />
                                    <Button bg={'none'} _hover={{bg: ''}} border={'1px'} borderColor={'white'} color={'white'} position={'absolute'}top={20} className='btn' width={{base: '100px' , md: '250px'}} h={'50px'} left={{base: '110px' , md: '70px'}} >Batafsil</Button>
                                    <Stack mt='6' spacing='3'>
                                    <Box display={'flex'} justifyContent={'space-between'}>
                                        <Badge textAlign={'center'} width={'40%'} height={'100%'} variant='outline' colorScheme='green'>
                                            {item.course.name}
                                        </Badge>
                                        <Text fontWeight={'bold'} color={'orange'}>
                                            {item.price} ming so'm
                                        </Text>
                                    </Box>
                                    <Heading fontWeight={'500'} size='md'>Kurs nomi: {item.course.name}</Heading>
                                    <Heading fontWeight={'500'} size='md'>Kurs turu: {item.course.courseType.name}</Heading>
                                    <Heading fontWeight={'500'} size='md'>Kurs kimlar uchun: {item.course.courseFor.name}</Heading>
                                    <Text color={'orange'} fontWeight={'500'}>
                                        Qabulda: {item.reception_counter.activeCount} ta o'quvchi
                                    </Text>
                                    <Text>
                                        {item.course.courseType.description}
                                    </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter position={'relative'} p={0}>
                                    <Box display={'flex'} alignItems={'center'} width={'100%'} gap={5} p={5}>
                                        <Avatar src={`${api}api/image/?id=${item.course.courseType.photo.id}`} />
                                        <Text fontSize={'20px'} fontWeight={'500'}>Shahzodbek Komilov</Text>
                                    </Box>
                                    <Box onClick={() => {
                                        onOpen()
                                        setCourseId(item.course.id)
                                    }} position={'absolute'} borderBottomLeftRadius={'8px'}borderBottomRightRadius={'8px'} className='cardFooterBtn' lang='0' top={0} width={'100%'} h={'0%'} bg={'orange'}>
                                        <Heading fontSize={'20px'} color={'white'}>Kursga yozilish</Heading>
                                       { <Modal isOpen={isOpen} onClose={onClose}>
                                            <ModalOverlay />
                                            <ModalContent>
                                            <ModalHeader>Kursga yozilish</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <FormControl>
                                                    <FormLabel>Xabar qoldiring (majburi emas)</FormLabel>
                                                    <Textarea onChange={(e) => setValue(e.target.value)} placeholder={'xabar...'} />
                                                </FormControl>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button  width={'100%'} colorScheme='orange' mr={3} onClick={() => {
                                                    handleSubmit()
                                                }}>
                                                    Tasdiqlash
                                                </Button>
                                            </ModalFooter>
                                            </ModalContent>
                                        </Modal>}
                                    </Box>
                                </CardFooter>
                            </Card>    
                    </Box>
                        )
                })}
            </Box>
        </Box>
    </Box>
  )
}

export default AllCourse