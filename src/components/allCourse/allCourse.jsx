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
import { Spinner } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import axios from 'axios'
import Lottie, { useLottie } from 'lottie-react'
import groovyWalkAnimation from "../../Animation - 1702976632892.json" 
import groovyWalkAnimation2 from "../../Animation - 1703051368917.json" 
import { IoMdClose } from "react-icons/io";
import { Logo } from '../../assets'
import { Link } from 'react-router-dom'
const AllCourse = ({data , loading , setDataVal}) => {
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
    const [loading2 , setLoading2] = useState(false)

    const handleSubmit = () => {
        setLoading2(true)
        axios.post(`${api}api/reception/new`,{
            "courseID": courseId,
            "description": value,
            "receptionNumber": `${day}${mon}${year}${h}${m}${s}${ms}`
        },{
            headers: {
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            setResponse(res.data.message)
            onClose()
            setVr(true)
            setLoading2(false)
            
        })
    }

  return (
    <Box width={'100%'} pb={10}   bg={'#F0F2F5'} display={'flex'}>
        <Box width={'100%'}>
            <Box textAlign={'center'} p={5}>
                <Heading>Bizdagi mavjud barcha kurslar</Heading>
            </Box>

           {loading && <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'100%'}>
                <Box width={'200px'}>
                 <Lottie animationData={groovyWalkAnimation2} loop={true} />
                </Box>
            </Box>}

           {vr && <Box position={'fixed'} width={'100%'} zIndex={10}display={'flex'} alignItems={'center'} height={'100vh'} top={0} justifyContent={'center'}  left={0} className='verify'> 
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

           {!loading && <Box pt={10}  width={'100%'} gap={20} display={'flex'} flexWrap={{base: 'wrap', md: 'wrap' , xl: 'nowrap'}} justifyContent={{base: 'center'}}>
                {data && data.map((item , i) => {
                    if(item.course.status === true) 
                        return (
                        <Box width={'100%'} p={{base: 3 , md: 10}} pt={0} >
                            <Card cursor={'pointer'} className='CardEffect' height={'100%'} width={'100%'}  position={'relative'}>
                                <CardBody position={'relative'}>
                                    <Image src={`${api}api/image/?id=${item.course.previewPhoto.id}`}
                                    className='cardImg'
                                    width={'100%'}
                                    objectFit={{base: 'contain' , md: 'cover'}}
                                    />
                                        <Button ml={{base: 2 , md: 4}}  onClick={() => setDataVal(item)} bg={'none'} _hover={{bg: ''}} border={'1px'}  borderColor={'white'} color={'white'} position={'absolute'} top={{base: 12 , md: 12}} className='btn' width={{base: '85%' , md:'80%'}} h={'50px'}  >
                                            <Link to={'/fullDesc'}>
                                                Batafsil
                                            </Link>
                                        </Button>
                                    <Stack mt='6' spacing='3'>
                                    <Box display={'flex'} justifyContent={'space-between'} flexDirection={{base: 'column' , md: 'row'}}>
                                        <Badge textAlign={'center'} width={{base:'100%' , md: '40%'}} height={'100%'} variant='outline' colorScheme='green'>
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
                                <CardFooter position={'relative'} p={0} display={'flex'} flexDirection={'column'} >
                                    <Box display={'flex'} alignItems={'center'} width={'100%'} gap={5} p={5 }>
                                        <Avatar src={`${api}api/image/?id=${item.mentor.employee.photo.id}`} />
                                        <Text fontSize={{base: '13px' , md: '20px'}} fontWeight={'500'}>{item.mentor === null ? "O'qituvchi belgilanmagan" : `${item.mentor.employee.face.firstname} ${item.mentor.employee.face.lastname}` } </Text>
                                    </Box>
                                    <Box display={{base: 'none' , md: 'block'}}  onClick={() => {
                                        onOpen()
                                        setCourseId(item.course.id)
                                    }} position={'absolute'} borderBottomLeftRadius={'8px'}borderBottomRightRadius={'8px'} className='cardFooterBtn' lang='0' top={0} width={'100%'} h={'0%'} bg={'black'}>
                                        <Heading fontSize={'20px'} color={'white'} textAlign={'center'} pt={5}>Kursga yozilish</Heading>
                                       { <Modal isOpen={isOpen} onClose={onClose}>
                                            <ModalOverlay />
                                            <ModalContent>
                                            <ModalHeader>Kursga yozilish</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <Image src={Logo}></Image>
                                                <FormControl mt={5}>
                                                    <FormLabel>Xabar qoldiring (majburi emas)</FormLabel>
                                                    <Textarea onChange={(e) => setValue(e.target.value)} placeholder={'xabar...'} />
                                                </FormControl>
                                            </ModalBody>
                                            <ModalFooter>
                                               {!loading2 && <Button  width={'100%'} bg={'#000'} color={'white'} h={'50px'} _hover={{bg: '#001'}} mr={3} onClick={() => {
                                                    handleSubmit()
                                                }}>
                                                    Tasdiqlash
                                                </Button>}
                                                {loading2 && <Button
                                                    isLoading
                                                    loadingText='Tasdiqlamoqda...'
                                                    colorScheme='teal'
                                                    variant='outline'
                                                    width={'100%'}
                                                >
                                                </Button>}
                                            </ModalFooter>
                                            </ModalContent>
                                        </Modal>}
                                    </Box>

                                    <Box display={{base: 'block' , md: 'none'}}  onClick={() => {
                                        onOpen()
                                        setCourseId(item.course.id)
                                    }} borderBottomLeftRadius={'8px'} borderBottomRightRadius={'8px'} position={'absolute'} bottom={0}   lang='0' top={20} width={'100%'} h={'70%'}background={'black'}>
                                        <Heading fontSize={'20px'} color={'#fff'} textAlign={'center'} pt={5} >Kursga yozilish</Heading>
                                       { <Modal isOpen={isOpen} onClose={onClose}>
                                            <ModalOverlay />
                                            <ModalContent>
                                            <ModalHeader>Kursga yozilish</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <Image src={Logo}></Image>
                                                <FormControl mt={5}>
                                                    <FormLabel>Xabar qoldiring (majburi emas)</FormLabel>
                                                    <Textarea onChange={(e) => setValue(e.target.value)} placeholder={'xabar...'} />
                                                </FormControl>
                                            </ModalBody>
                                            <ModalFooter>
                                               {!loading2 && <Button  width={'100%'} bg={'#000'} color={'white'} h={'50px'} _hover={{bg: '#001'}} mr={3} onClick={() => {
                                                    handleSubmit()
                                                }}>
                                                    Tasdiqlash
                                                </Button>}
                                                {loading2 && <Button
                                                    isLoading
                                                    loadingText='Tasdiqlamoqda...'
                                                    colorScheme='teal'
                                                    variant='outline'
                                                    width={'100%'}
                                                >
                                                </Button>}
                                            </ModalFooter>
                                            </ModalContent>
                                        </Modal>}
                                    </Box>
                                  
                                </CardFooter>
                            </Card>    
                    </Box>
                        )
                })}
            </Box>}
        </Box>
    </Box>
  )
}

export default AllCourse