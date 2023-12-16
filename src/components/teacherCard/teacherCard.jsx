import { Box, Divider, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Teacher } from '../../assets'
import { IoStarSharp } from 'react-icons/io5'

const TeacherCard = () => {
  return (
    <Box>
        
        <Box bg={'white'} border={'1px'} borderColor={'#E9EAF0'}>
            <Box>
                <Image width={'300px'} src={Teacher}></Image>
            </Box>

            <Box>
                <Box textAlign={'center'} py={'20px'}>
                    <Heading fontSize={'20px'} >Devon Lane</Heading>
                    <Text >Senior Developer</Text>
                </Box>

                <Divider />

                <Box p={'10px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box display={'flex'} alignItems={'center'}>
                        <IoStarSharp color='yellow' fontSize={'25px'} />
                        <Text>5.0</Text>
                    </Box>

                    <Box>
                        <Text color={'#4E5566'}>854 students</Text>
                    </Box>
                </Box>
            </Box>
        </Box>

    </Box>
  )
}

export default TeacherCard