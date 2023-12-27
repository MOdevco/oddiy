import { Box, Button, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
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
import {useMask , InputMask} from '@react-input/mask'
const Register = () => {
    const [more , setMore] = useState(true)
    const [phoneValur , setPhoneValue] = useState('');
    const [otpValue , setOtpValue] = useState({one: '' , two: '' , three: '' , four: '' , five: '' , six: ''});
    const [code , setCode] = useState('');
    const val = otpValue.one+ otpValue.two+otpValue.three+otpValue.four+otpValue.five+otpValue.six
    const toast = useToast();
    const [validate , setValidate] = useState(false);
    const navigate = useNavigate();
    const [des , setDes] = useState(false)
    const codePre = ["90","91","93","94","95","97","98","33","88","73","71","50","78","99"]

    const p1 = phoneValur.slice(1,4)
    const p2 = phoneValur.slice(6,8)
    const p3 = phoneValur.slice(10,13)
    const p4 = phoneValur.slice(14,16)
    const p5 = phoneValur.slice(17,19)
    const resPhoneVal = p1+p2+p3+p4+p5
    

    const inputRef = useMask({
        mask: "+998 (__) ___-__-__",
        replacement: { _: /\d/ },
    });

    const sendOtp = () => {
        if(codePre.includes(p2)) {
            const formData = new FormData()
            formData.append('phone' , resPhoneVal)
            axios.post(`${api}api/auth/send-code` , formData)
            .then((res) => {
                setCode(res.data.data);
                console.log(res.data.data);
                setMore(false)
            });
        }else {
            setDes(true)
        }
    };

    const handleSendOtp = () => {
        if(code === val) {
            const formData = new FormData()
            formData.append('phone' , resPhoneVal)
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
                    navigate('/home')
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
    };

    useEffect(() => {
        window.scroll(0,0)
    }, []);

  return (
    <Box position={'fixed'} width={'100%'} zIndex={500} top={0} left={0}  bg={'white'} >
        <Box display={'flex'} justifyContent={'space-between'} minH={'63.8vh'} alignItems={'center'}>

            <Box borderLeft={'2px'} borderColor={'#564FFD'} boxShadow='2xl' p='6' rounded='md' bg='white' width={'100%'} mx={{base: '0' , md: '300px'}}>
                <Box display={'flex'} flexDirection={'column'} gap={'20px'}> 
                    <Box >
                       { more &&<Heading>Ro’yhatdan O’tish</Heading>}
                       {!more && <Heading>Kod</Heading>}
                    </Box>


                    {more && <Box  display={'flex'} flexDirection={'column'} gap={'20px'}>
                        <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} gap={'50px'}>
                            <FormControl>
                                <FormLabel>Telefon raqam</FormLabel>
                                <Input ref={inputRef} onChange={(e) => setPhoneValue(e.target.value)} type='text'  placeholder='+998' />
                               {validate && <Text color={'red'} fontSize={'14px'}>Maydon to'lmagan</Text>}
                               {des && <Text color={'red'} fontSize={'14px'}>Ma'lumot noto'g'ri</Text>}
                            </FormControl>
                        </Box>

                        <Button onClick={() => {
                            sendOtp()
                        }} width={'200px'} display={'flex'} alignItems={'center'} gap={2} bg={'#000'} color={'white'} _hover={{bg: ''}} _active={{bg: ''}}>Tasdiqlash <FaArrowRightLong fontSize={'20px'} className='right' /></Button>
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