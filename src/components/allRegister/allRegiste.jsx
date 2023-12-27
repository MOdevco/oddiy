import { Box, Button, Heading, Input } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { api } from '../../api/api'
import { useNavigate } from 'react-router-dom'
const AllRegiste = () => {
    const [data, setData] = useState({firstname: '' , lastname: '' , middlename: '' , birthday: '' , tel1: '' , tel2: '' , tg: ''})
    const navigate = useNavigate()
    const handleSubmit = () => {
        axios.post(`${api}api/user/create`,{
            firstname: data.firstname,
            lastname: data.lastname,
            middlename: data.middlename,
            birthday: data.birthday.length === 0 ? null : data.birthday,
            tel1: data.tel1,
            tel2:  data.tel2,
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
        }).catch((er) => {
            console.log(er);
        })
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
                    <Input onChange={(e) => setData({...data, firstname: e.target.value})} placeholder='Ism...' type='text' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Familiya</FormLabel>
                    <Input onChange={(e) => setData({...data, lastname: e.target.value})} placeholder='Familiya...'type='text' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Sharif</FormLabel>
                    <Input onChange={(e) => setData({...data, middlename: e.target.value})} placeholder='Sharif...' type='text' />
                </FormControl>
                <FormControl >
                    <FormLabel>Tug'ilgan sana</FormLabel>
                    <Input onChange={(e) => setData({...data, birthday: e.target.value})}placeholder="Tug'ilgan sana..." type='text' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Telefon asosiy</FormLabel>
                    <Input onChange={(e) => setData({...data, tel1: e.target.value})} placeholder='Telefon asosiy' type='text' />
                </FormControl>
                <FormControl>
                    <FormLabel>Telefon qo'shimcha</FormLabel>
                    <Input onChange={(e) => setData({...data, tel2: e.target.value})} placeholder="Telefon qo'shimcha" type='text' />
                </FormControl>
                <FormControl>
                    <FormLabel>Telegram nik</FormLabel>
                    <Input onChange={(e) => setData({...data, tg: e.target.value})} placeholder={"Telegram nik"}type='text' />
                </FormControl>
                <Button onClick={() => {
                    handleSubmit()
                }}  bg={'green'} _hover={{bg: ''}} _active={{bg: ''}} mt={5} color={'white'} width={'100%'}>Saqlash</Button>
            </Box>

        </Box>
   </Box>

//    firstname , lastname , middlename , birthday , tel1 , tel2 , tg
  )
}

export default AllRegiste