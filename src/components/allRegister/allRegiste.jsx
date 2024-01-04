import { Box, Button, Heading, Input } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { api } from '../../api/api'
import { useNavigate } from 'react-router-dom'
import { useMask } from '@react-input/mask'
const AllRegiste = () => {
    const [data, setData] = useState({firstname: '' , lastname: '' , middlename: '' , birthday: '' , tel1: '' , tel2: '' , tg: ''})
    const phoneValur = data.tel1
    const phoneValur2 = data.tel2
    const navigate = useNavigate()
    const [loading , setLoading] = useState(false)
    const p1 = phoneValur.slice(1,4)
    const p2 = phoneValur.slice(6,8)
    const p3 = phoneValur.slice(10,13)
    const p4 = phoneValur.slice(14,16)
    const p5 = phoneValur.slice(17,19)
    const resPhoneVal = p1+p2+p3+p4+p5
    const [validation , setValidation] = useState(false)
    const p11 = phoneValur2.slice(1,4)
    const p22 = phoneValur2.slice(6,8)
    const p33 = phoneValur2.slice(10,13)
    const p44 = phoneValur2.slice(14,16)
    const p55 = phoneValur2.slice(17,19)
    const resPhoneVal2 = p11+p22+p33+p44+p55
    const toast = useToast()

    const inputRef = useMask({
        mask: " __-__-____",
        replacement: { _: /\d/ },
    });
    const inputRef2 = useMask({
        mask: "+998 (__) ___-__-__",
        replacement: { _: /\d/ },
    });
    const inputRef3 = useMask({
        mask: "+998 (__) ___-__-__",
        replacement: { _: /\d/ },
    });
    const handleSubmit = () => {
        setLoading(true)
        axios.post(`${api}api/user/create`,{
            firstname: data.firstname,
            lastname: data.lastname,
            middlename: data.middlename,
            birthday: data.birthday.length === 0 ? null : data.birthday.trim(),
            tel1: resPhoneVal,
            tel2:  resPhoneVal2,
            tg: data.tg
        } ,{
            headers: {
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        } )
        .then((res) => {
            navigate('/home')
            setLoading(false)
            toast({
                description: "Foidalanuvchi ro'yxatdan o'tdi",
                position: 'top-right',
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
        }).catch((er) => {
            toast({
                description: "Ma'lumotlar to'liq emas",
                position: 'top-right',
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
        })
        if(data.birthday.length===0 || data.firstname.length===0 || data.lastname.length===0 || data.middlename.length===0 || data.tel1.length===0) {
            setLoading(false)
        } 
    
    }

  return (
   <Box position={'fixed'} top={0} left={0} zIndex={100} bg={'white'} width={'100%'} h={'100vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <Box width={{base: '100%' , md: '40%'}} display={'flex'} flexDirection={'column'} gap={5} rounded={'10px'} p={'20px'} bg={'transparent'} boxShadow='dark-lg' className='borderRegister'>
            <Box>
                <Heading fontFamily={'unset'}>To'liq ro'yhatdan o'ting</Heading>
            </Box>

            <Box display={'flex'} flexDirection={'column'} gap={5}>
                <FormControl isRequired>
                    <FormLabel>Ism</FormLabel>
                    <Input isInvalid={data.firstname.length===0 ? true : false} onChange={(e) => setData({...data, firstname: e.target.value})} placeholder='Ism...' type='text' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Familiya</FormLabel>
                    <Input  isInvalid={data.lastname.length===0 ? true : false} onChange={(e) => setData({...data, lastname: e.target.value})} placeholder='Familiya...'type='text' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Sharif</FormLabel>
                    <Input  isInvalid={data.middlename.length===0 ? true : false} onChange={(e) => setData({...data, middlename: e.target.value})} placeholder='Sharif...' type='text' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Tug'ilgan sana</FormLabel>
                    <Input  isInvalid={data.birthday.length===0 ? true : false} ref={inputRef} onChange={(e) => setData({...data, birthday: e.target.value})}placeholder="kk-oo-yyyy." type='text' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Telefon asosiy</FormLabel>
                    <Input  isInvalid={data.tel1.length===0 ? true : false} ref={inputRef2} onChange={(e) => setData({...data, tel1: e.target.value})} placeholder='+998' type='text' />
                </FormControl>
                <FormControl>
                    <FormLabel>Telefon qo'shimcha</FormLabel>
                    <Input ref={inputRef3} onChange={(e) => setData({...data, tel2: e.target.value})} placeholder="+998" type='text' />
                </FormControl>
                <FormControl>
                    <FormLabel>Telegram nik</FormLabel>
                    <Input onChange={(e) => setData({...data, tg: e.target.value})} placeholder={"Telegram nik"}type='text' />
                </FormControl>
               { !loading &&<Button onClick={() => {
                    handleSubmit()
                }}  bg={'green'} _hover={{bg: ''}} _active={{bg: ''}} mt={5} color={'white'} width={'100%'}>Saqlash</Button>}
               {loading && <Button
                isLoading
                loadingText='Saqlanmoqda...'
                colorScheme='teal'
                variant='outline'
                >
                </Button>}
            </Box>

        </Box>
   </Box>

//    firstname , lastname , middlename , birthday , tel1 , tel2 , tg
  )
}

export default AllRegiste