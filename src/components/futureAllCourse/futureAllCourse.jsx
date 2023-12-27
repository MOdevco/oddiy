import { Avatar, Box,  Heading, Stack, Text } from '@chakra-ui/react'
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { IoMan } from "react-icons/io5";
import { api } from '../../api/api';
import ImageGet from '../image/image';
import groovyWalkAnimation2 from "../../Animation - 1703051368917.json" 
import Lottie from 'lottie-react';
const FutureAllCourse = ({data , loading}) => {
   
  return (
    <Box className='wrapper' minH={'100%'}>
        <Box display={'flex'} alignItems={'center'} gap={10} width={'100%'} border={'1px'} borderColor={'gray.200'} rounded={'8px'} p={10} justifyContent={'center'} flexDirection={'column'}>
            <Box>
                <Heading>Kelajakdagi barcha kurslar</Heading>
            </Box>
            {loading && <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'100%'}>
                <Box width={'200px'}>
                 <Lottie animationData={groovyWalkAnimation2} loop={true} />
                </Box>
            </Box>}
            {!loading && <Box display={'flex'} width={'100%'} justifyContent={'center'} flexWrap={'wrap'} alignItems={'center'} gap={10}>
                {data && data.map((item , i) => {
                    if(item.course.status === false)
                        return (
                            <Card
                            key={i}
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            >
                                <ImageGet id={item.course.previewPhoto.id}/>
    
                                <Stack>
                                    <CardBody>
                                        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={{base: 'column' , md: 'row'}}>
                                            <Badge width={{base: '100%' , md: '15%'}} textAlign={'center'} colorScheme='green'>{item.course.courseType.name}</Badge>
                                            <Text fontSize={'20px'} fontWeight={'500'}>120 ming so'm</Text>
                                        </Box>
                                        <Text fontSize={'20px'} fontWeight={'500'}>Kurs nomi: {item.course.name}</Text>
                                        <Text fontSize={'20px'} fontWeight={'500'}>Kurs turi: {item.course.courseType.name}</Text>
                                        <Text fontSize={'20px'} fontWeight={'500'}>Kurs kimlar uchun?: {item.course.courseFor.name}</Text>
                                        <Text py='2' maxW={'500px'}>
                                        {item.course.description}
                                        </Text>
                                    </CardBody>
        
                                    <CardFooter display={'flex'} alignItems={{base: 'flex-start' , md: 'center'}} gap={5} justifyContent={{base: 'flex-start' , md: 'space-between'}} flexDirection={{base: 'column' , md: 'row'}}>
                                        <Box display={'flex'} alignItems={'center'} gap={3}>
                                            <Avatar src={`${api}api/image/?id=${item.mentor === null ? '' : item.mentor.employee.photo.id}`} />
                                            <Text fontSize={'18px'} fontWeight={'500'}>{item.mentor ===null ? "Mentor belgilanmagan": item.mentor.employee.face.firstname} {item.mentor === null ? '' : item.mentor.employee.face.lastname}</Text>
                                        </Box>
                                        <Box fontSize={'20px'} display={'flex'} alignItems={'center'} gap={'☻'}>
                                            <Text color={'orange'} fontWeight={'500'}>Qabulda: <span style={{color: '#9F82FF' , fontWeight: 'bold'}}>{item.reception_counter ===null ? '' : item.reception_counter.totalCount} ta</span></Text>
                                        </Box>
                                    </CardFooter>
                                </Stack>
                            </Card>
                        )
                })}
            
            </Box>}
        </Box>
    </Box>
  )
}

export default FutureAllCourse

