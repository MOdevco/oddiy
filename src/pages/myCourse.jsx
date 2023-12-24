import { ArrowBackIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Heading, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import MyLearingCourse from '../components/myLearingCourse/myLearingCourse'

const MyCourse = () => {

    useEffect(() => {
        window.scroll(0,0)
    } ,[])
  return (
    <Box minH={'100vh'} w={'100%'} display={'flex'} alignItems={'flex-start'} justifyContent={'center'}bg={'gray.100'}>
        <Box width={'100%'}  display={'flex'} p={10} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>

            <Box w={'70%'} bg={'white'} borderColor={'gray.400'}  borderBottom={'none'}>
                <Box display={'flex'} alignItems={'center'} border={'1px'} justifyContent={'space-between'} flexDirection={{base: 'column' ,md: 'row'}} borderBottom={'1px'} borderColor={'gray.400'}>
                    <Box display={'flex '} alignItems={'center'} gap={5}  p={{base: 10,md:20}}> 
                        <Avatar width={'70px'} h={'70px'} />
                        <Box>
                            <Heading fontSize={'25px'}>MOdevco</Heading>
                            <Text color={'gray'}>Web Designer & Best-Selling Instructor</Text>
                        </Box>
                    </Box>
                    <Box  p={{base: 10,md:20}} >
                        <Button width={{base: '100%' , md: '200px'}} h={'50px'} bg={'#000'} color={'white'} _hover={{bg: ''}} fontSize={'20px'}>  <ArrowBackIcon />Yangi kurs</Button>
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
                                <p>two!</p>
                            </TabPanel>
                            <TabPanel>
                                <MyLearingCourse />
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