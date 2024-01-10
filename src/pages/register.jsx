import { Box, Button, Heading, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Logo, RegisterImg } from '../assets'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { FaArrowRightLong } from 'react-icons/fa6'
import axios from 'axios'
import { api } from '../api/api'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
const Register = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
    // const [more , setMore] = useState(true)
    // const [phoneValur , setPhoneValue] = useState('');
    // const [code , setCode] = useState('');
    // const val = otpValue.one+ otpValue.two+otpValue.three+otpValue.four+otpValue.five+otpValue.six
    // const toast = useToast();
    // const [validate , setValidate] = useState(false);
    const navigate = useNavigate();
    // const [des , setDes] = useState(false)
    // const codePre = ["90","91","93","94","95","97","98","33","88","73","71","50","78","99"]
    // const [loading , setLoading] = useState(false)
    // const [loadingCode , setLoadingCode] = useState(false)
    // const [sendCode , setSendCode] = useState()

    // const p1 = phoneValur.slice(1,4)
    // const p2 = phoneValur.slice(6,8)
    // const p3 = phoneValur.slice(10,13)
    // const p4 = phoneValur.slice(14,16)
    // const p5 = phoneValur.slice(17,19)
    // const resPhoneVal = p1+p2+p3+p4+p5
    

    // const inputRef = useMask({
    //     mask: "+998 (__) ___-__-__",
    //     replacement: { _: /\d/ },
    // });
    const [value , setValue] = useState({username: '' , password: ''})
    const handleLogin = () => {
      const formData = new FormData()
      formData.append('password' , value.password)
      formData.append('username' , value.username)
      axios.post(`${api}api/auth/login`,formData)
      .then((res) => {
        console.log(res.data);
        navigate('/')
      })
    }

  

    useEffect(() => {
        window.scroll(0,0)
    }, []);

  return (
    <Box position={'fixed'} width={'100%'} zIndex={500} top={0} left={0}  bg={'white'} >
        <Box display={'flex'}  justifyContent={'center'} minH={'100vh'} alignItems={'center'}>
            <Box boxShadow='2xl' width={'30%'} h={'200%'} p={10} display={'flex'} borderTop={'2px'}  gap={2} flexDirection={'column'}> 
              <Box display={'flex'} justifyContent={'center'} >
                <Image src={Logo} alt='LOGO' width={'100%'}></Image>
              </Box>

              <Box>
                <Heading as={'h3'} size={'xl'}>Tizimga kirish!</Heading>
              </Box>

              <Box>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input onChange={(e) => setValue({...value , username: e.target.value})} type='text' placeholder='username...'/>
                </FormControl>
                <FormControl>
                  
                  <FormLabel>Password</FormLabel>
                    <InputGroup size='md'>
                      <Input onChange={(e) => setValue({...value , password: e.target.value})}
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='password...'
                      />
                      <InputRightElement width='4.5rem'>
                        <Button  h='1.75rem' size='sm' onClick={handleClick}>
                          {show ? <ViewOffIcon /> :  <ViewIcon />}
                        </Button>
                      </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Box>

              <Text color={'blue'} fontWeight={'400'} textDecoration={'underline'} cursor={'pointer'}>
                Parolni unutdingizmi?
              </Text>

              <Box>
                <Button onClick={handleLogin} width={'100%'} bg={'#000'} _active={{bg: ''}} _hover={{bg: ''}} color={'white'}>Tasdiqlash</Button>
              </Box>

            </Box>
        </Box>
    </Box>
  )
}

export default Register