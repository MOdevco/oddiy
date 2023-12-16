import { Box, Divider, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Badge } from '@chakra-ui/react'
import { IoStarSharp } from "react-icons/io5";
import ImageGet from '../image/image';
const CourseCards = ({item}) => {
    const [tag , setTag] = useState(item.courseType.courseTags)
  return (
    <Box>
      

        <Box width={{base: '100%' , md: '300px'}} className='card' bg={'white'} display={'flex'} flexDirection={'column'} gap={5}>
            {/* for img */}
            <Box>
                <ImageGet id={item.previewPhoto.id}  />
            </Box>

            {/* for body card */}
            <Box px={'20px'}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} fontSize={'18px'}>
                    <Badge colorScheme='red'>{item.courseType.name}</Badge>
                    <Text color={'#564FFD'} fontWeight={'bold'}>300.000UZS</Text>
                </Box>

                <Box display={'flex'}  flexWrap={'wrap'} pt={2}  alignItems={'flex-start'} gap={2} textAlign={'center'} minHeight={'100%'}>
                    {tag.map((tag , i) => (
                        <Badge key={i} colorScheme='purple' px={3} py={1} rounded={'8px'} width={'100'}>
                          {tag.name}
                          
                       </Badge>
                    ))}
                </Box>
            </Box>

            <Divider/>

            {/* for footer card */}
            <Box px={'20px'} pb={'15px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Box display={'flex'} alignItems={'center'}>
                    <IoStarSharp color='yellow' fontSize={'25px'} />
                    <Text>5.0</Text>
                </Box>

                <Box>
                    <Text fontSize={'20px'} fontWeight={'bold'}>40+ <span style={{color: 'gray'}}> students</span></Text>
                </Box>
            </Box>

           
        </Box>
    </Box>
  )
}

export default CourseCards