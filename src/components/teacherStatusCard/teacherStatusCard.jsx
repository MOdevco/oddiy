import { Avatar, Badge, Box, Divider, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { IoStarSharp } from 'react-icons/io5'
import { LuUser2 } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { FiBarChart } from "react-icons/fi";
import ImageGet from '../image/image';
const TeacherStatusCard = ({item}) => {
  return (
    <Box >
        <Box border={'1px'} borderColor={'#E9EAF0'} bg={'white'}  width={{base: '100%' , md: '725px'}}>
            <Box display={'flex'}>
                <Box>
                    {/* <Image width={{base: '100%' , md: '250px'}} h={'100%'} src={TeacherStatus}></Image> */}
                    <ImageGet id={item.photo.id} />
                </Box>

                <Box p={'20px'} width={'100%'} display={'flex'} flexDirection={'column'} gap={2}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                        <Badge colorScheme='green'>Kurs narxi</Badge>
                        <Text>300.000UZS</Text>
                    </Box>

                    <Box>
                        <Text>Investing In Stocks The Complete Course! 13 H...</Text>
                    </Box>

                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={4}>
                        <Box  display={'flex'} alignItems={'center'} gap={4}>
                            {/* <Avatar  /> */}
                            <Text>{item.face.firstname} {item.face.lastname}</Text>
                        </Box>

                        <Box display={'flex'} alignItems={'center'}>
                            <IoStarSharp color='yellow' fontSize={'25px'} />
                            <Text>5.0</Text>
                        </Box>
                    </Box>

                    <Divider p={'10px'}  />

                    <Box pt={'10px'} display={'flex'} alignItems={{base: 'flex-start' , md: 'center'} } flexDirection={{base: 'column' , md: 'row'}} justifyContent={'space-between'}>
                        <Box display={'flex'} gap={2}alignItems={'center'}>
                            <LuUser2 fontSize={'18px'} color='#564FFD' />
                            <Text>265.7K students</Text>
                        </Box>
                        {/* <Box display={'flex'} gap={2}alignItems={'center'}>
                            <FiBarChart fontSize={'18px'} color='tomato' />
                            <Text>265.7K students</Text>
                        </Box>
                        <Box display={'flex'} gap={2}alignItems={'center'}>
                            <CiClock2  fontSize={'18px'} color='green' fontWeight={'bold'} />
                            <Text>6 Soat</Text>
                        </Box> */}
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default TeacherStatusCard