import { ArrowBackIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import MyLearingCourse from '../components/myLearingCourse/myLearingCourse'
import { Logo } from '../assets'

const MyCourse = () => {

    useEffect(() => {
        window.scroll(0,0)
    } ,[])
  return (
    <Box minH={'100vh'} w={'100%'} display={'flex'} alignItems={'flex-start'} justifyContent={'center'}bg={'gray.100'}>
        <Box width={'100%'}  display={'flex'} p={10} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>

            <Box w={{base: '100%' , md: '70%'}} bg={'white'} borderColor={'gray.400'}  borderBottom={'none'}>
                <Box display={'flex'} alignItems={'center'} border={'1px'} justifyContent={'center'} flexDirection={{base: 'column' ,md: 'row'}} borderBottom={'1px'} borderColor={'gray.400'}>
                    <Box display={'flex '} alignItems={'center'}   gap={5}  p={10} flexDirection={{base: 'column' , md: 'row'}}> 
                        {/* <Avatar width={'70px'} h={'70px'} />
                        <Box textAlign={{base: 'center' , md: 'start'}}>
                            <Heading  fontSize={'25px'}>MOdevco</Heading>
                            <Text color={'gray'}>Web Designer & Best-Selling Instructor</Text>
                        </Box> */}
                        <Image width={'500px'} src={Logo} />
                    </Box>
                </Box>
                <Box>
                    <Tabs colorScheme='#000'>
                        <TabList  borderRight={'1px'}  borderLeft={'1px'} borderColor={'gray.400'} display={'flex'} justifyContent={'space-evenly'}>
                            <Tab fontSize={'20px'}>Yozilgan kurslar</Tab>
                            <Tab fontSize={'20px'}>O'qiyotgan kurslar</Tab>
                        </TabList>

                        <Heading pt={10} px={4}>Kurslarim</Heading>

                        <TabPanels>
                            <TabPanel>
                                <MyLearingCourse />
                            </TabPanel>
                            <TabPanel>
                                <Heading textAlign={'center'} color={'gray'} fontSize={'30px'} userSelect={'none'}>Hozircha bunday bo'lim mavjud emas :(</Heading>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>
               
        </Box>
    </Box>
  )
}

export default MyCourse