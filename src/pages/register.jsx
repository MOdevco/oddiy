import { Box, Button, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RegisterImg } from '../assets'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { FaArrowRightLong } from 'react-icons/fa6'
import axios from 'axios'
import { api } from '../api/api'
import { PinInput, PinInputField , HStack } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [more , setMore] = useState(true)
    const [phoneValur , setPhoneValue] = useState('')
    const [otpValue , setOtpValue] = useState({one: '' , two: '' , three: '' , four: '' , five: '' , six: ''})
    const [code , setCode] = useState('')
    const val = otpValue.one+ otpValue.two+otpValue.three+otpValue.four+otpValue.five+otpValue.six
    const toast = useToast()
    const [validate , setValidate] = useState(false)
    const navigate = useNavigate()


    const sendOtp = () => {

        if(!phoneValur.length) {
            
        }
        const formData = new FormData()
        formData.append('phone' , phoneValur)
        axios.post(`${api}api/auth/send-code` , formData)
        .then((res) => {
            setCode(res.data.data);
            console.log(res.data.data);
        })

    }

    const handleSendOtp = () => {
        if(code === val) {
            const formData = new FormData()
            formData.append('phone' , phoneValur)
            formData.append('code' , val)
    
    
            axios.post(`${api}api/auth/check-code` , formData)
            .then((res) => {
                console.log(res.data);
                toast({
                    description: `${res.data.data.message}`,
                    position: 'top-right',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
                localStorage.setItem('token' , res.data.data.token)
                if(res.data.message === 'Active') {
                    navigate('/')
                } else {
                    navigate('/allRegister')
                }
            })
        } else {
            toast({
                description: 'Ma\'lumot notog\'ri',
                position: 'top-right',
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        }
    }

  return (
    <Box >
        <Box display={'flex'} justifyContent={'space-between'} minH={'63.8vh'} alignItems={'center'}>
            {/* <Box>
                <Image width={'700px'} h={'100%'} src={RegisterImg}></Image>
            </Box> */}


            <Box borderLeft={'2px'} borderColor={'#564FFD'} boxShadow='2xl' p='6' rounded='md' bg='white' width={'100%'} mx={{base: '0' , md: '300px'}}>
                <Box display={'flex'} flexDirection={'column'} gap={'20px'}> 
                    <Box >
                       { more &&<Heading>Ro’yhatdan O’tish</Heading>}
                       {!more && <Heading>Kod</Heading>}
                    </Box>


                   {/* {more && <Box  display={'flex'} flexDirection={'column'} gap={'20px'}>
                        <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} gap={'50px'}>
                            <FormControl>
                                <FormLabel>Ism</FormLabel>
                                <Input type='text' placeholder='ism...' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Familiya</FormLabel>
                                <Input type='text' placeholder='familiya...' />
                            </FormControl>
                        </Box>

                        <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} gap={'50px'}>
                            <FormControl>
                                <FormLabel>Tug'ulgan sana</FormLabel>
                                <Input type='email'  placeholder='sana...' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Telefon nomer</FormLabel>
                                <Input type='number'  placeholder='+998' />
                            </FormControl>
                        </Box>

                        <Button width={'200px'} display={'flex'} alignItems={'center'} gap={2} bg={'green'} color={'white'} _hover={{bg: ''}} _active={{bg: ''}}>Tasdiqlash <FaArrowRightLong fontSize={'20px'} className='right' /></Button>

                    </Box>} */}


                    {more && <Box  display={'flex'} flexDirection={'column'} gap={'20px'}>
                        <Box>
                            {/* <Text fontSize={'18px'}>Agarda siz oldin ro'yxatdan o'tmagan bo'lsangiz! va sizda akkount yo'q bo'lsa <span onClick={() => setMore(true)} style={{color: 'green' , flexWrap: 'bold' , cursor: 'pointer'}}>bu yerga bosing</span></Text> */}
                        </Box>

                        <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} gap={'50px'}>
                            <FormControl>
                                <FormLabel>Telefon nomer</FormLabel>
                                <Input onChange={(e) => setPhoneValue(e.target.value)} type='number'  placeholder='+998' />
                               {validate && <Text color={'red'} fontSize={'14px'}>Maydon to'lmagan</Text>}
                            </FormControl>
                        </Box>

                        <Button onClick={() => {
                            sendOtp()
                            if(phoneValur.length) {
                                setMore(false)
                            } else {
                                setValidate(true)
                            }
                        }} width={'200px'} display={'flex'} alignItems={'center'} gap={2} bg={'green'} color={'white'} _hover={{bg: ''}} _active={{bg: ''}}>Tasdiqlash <FaArrowRightLong fontSize={'20px'} className='right' /></Button>

                    </Box>}


                    {!more && <Box  display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
                        <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} gap={'50px'}>
                            <FormControl>
                                <FormLabel fontSize={'25px'}>Kodni Tasdiqlang</FormLabel>
                                <HStack>
                                    <PinInput type='alphanumeric' mask >
                                        <PinInputField  onChange={(e) => setOtpValue({...otpValue, one: e.target.value})} width={'60px'} h={'60px'} />
                                        <PinInputField  onChange={(e) => setOtpValue({...otpValue, two: e.target.value})} width={'60px'} h={'60px'} />
                                        <PinInputField  onChange={(e) => setOtpValue({...otpValue, three: e.target.value})} width={'60px'} h={'60px'} />
                                        <PinInputField  onChange={(e) => setOtpValue({...otpValue, four: e.target.value})} width={'60px'} h={'60px'} />
                                        <PinInputField  onChange={(e) => setOtpValue({...otpValue, five: e.target.value})} width={'60px'} h={'60px'} />
                                        <PinInputField  onChange={(e) => setOtpValue({...otpValue, six: e.target.value})} width={'60px'} h={'60px'} />
                                    </PinInput>
                                </HStack>
                            </FormControl>
                        </Box>

                        <Button onClick={handleSendOtp} width={'200px'} display={'flex'} alignItems={'center'} gap={2} bg={'green'} color={'white'} _hover={{bg: ''}} _active={{bg: ''}}>Tasdiqlash <FaArrowRightLong fontSize={'20px'} className='right' /></Button>

                    </Box>}



                    


                </Box>
            </Box>

            

            <Box></Box>
        </Box>
    </Box>
  )
}

export default Register