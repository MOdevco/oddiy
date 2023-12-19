import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { manku } from '../assets'
import { FaArrowRight } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function About() {
  return (
    <Box>
      <Box minHeight='100vh' display='flex' alignItems='center' justifyContent='space-around' flexDirection={{md:'unset', base:'column'}} >
        {/* for mans picture  */}
        <Box>
          <Text color='#E9EAF0' fontSize='80px'>2007-2021</Text>
          <Text color='#1D2026' fontSize='48px'>We share knowledge <br /> with the world</Text>
          <Text color='#6E7485' width='535px'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla. </Text>
        </Box>
        <Box>
          <img src={manku} width={500} alt="" />
        </Box>
      </Box>
      {/* for woman and man  */}
      <Box display='flex' alignItems='center' justifyContent='space-around' bg='#FFEEE8' flexDirection={{md:'unset', base:'column-reverse'}} mt={{md:'0', base:'40px'}} >
        <img src={manku} alt="" />
        <Box>
          <Text color='#FF6636' fontSize='16px' fontWeight='500'>OUR ONE BILLION MISSION</Text>
          <Text color='#1D2026' fontWeight='700' fontSize='40px'>Our one billion mission <br /> sounds bold, We agree.</Text>
          <Text width='535px' color='#4E5566' fontWeight={400}>"We cannot solve our problems with the same thinking we used when we created them."—Albert Einstein. Institutions are slow to change. Committees are where good ideas and innovative thinking go to die. Choose agility over dogma. Embrace and drive change. We need to wipe the slate clean and begin with bold, radical thinking.</Text>
        </Box>
      </Box>
      {/* for img  */}
      <Box mt={20} display='flex' alignItems='center' justifyContent='space-around' flexDirection={{md:'unset', base:'column'}} marginTop={{md:'0', base:'40px'}}>
        <Box>
          <Text color='#FF6636' fontSize={16} fontWeight={500}>Our Gallary</Text>
          <Text color='#1D2026' fontWeight={600} fontSize={40}>We’ve been here <br /> almost 17 years</Text>
          <Text width='424px' color='#4E5566' >Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.</Text>
          <Button bg='#FF6636' color='white' display='flex' alignItems='center' gap={2}>Join Our Team <FaArrowRight /> </Button>
        </Box>
        <Box>
          <img src={manku} width={500} alt="" />
        </Box>
      </Box>
      {/* for cards  */}
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection={{md:'unset', base:'column'}}>
          {/* card  */}
          <Box display='flex' flexDirection='column' width={600} padding={20}>
            <Box  bg='#F5F7FA' padding={10}>
            <Text><RiDoubleQuotesL size={30} color='#FF6636'/></Text>
            <Text fontSize='18px' color='#1D2026' width='376px' fontWeight={400} px={10}>Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.</Text>
            <Text display='flex' alignItems='end' justifyContent='end'><RiDoubleQuotesL size={30} color='#FF6636'/></Text>
            </Box>
           <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
           <Text color='1D2026' >Sundar Pichai</Text>
            <Text color='#6E7485' fontSize='14px' display='flex' alignItems='center' gap='6px'>Chief Chairman of <Text color='#564FFD' fontSize='14px'>Google</Text></Text>
           </Box>
          </Box>
          {/* 2 */}
          <Box display='flex' flexDirection='column' width={600} padding={20}>
            <Box  bg='#F5F7FA' padding={10}>
            <Text><RiDoubleQuotesL size={30} color='#FF6636'/></Text>
            <Text fontSize='18px' color='#1D2026' width='376px' fontWeight={400} px={10}>Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.</Text>
            <Text display='flex' alignItems='end' justifyContent='end'><RiDoubleQuotesL size={30} color='#FF6636'/></Text>
            </Box>
           <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
           <Text color='1D2026' >Sundar Pichai</Text>
            <Text color='#6E7485' fontSize='14px' display='flex' alignItems='center' gap='6px'>Chief Chairman of <Text color='#564FFD' fontSize='14px'>Google</Text></Text>
           </Box>
          </Box>
          {/* 3 */}
          <Box display='flex' flexDirection='column' width={600} padding={20}>
            <Box  bg='#F5F7FA' padding={10}>
            <Text><RiDoubleQuotesL size={30} color='#FF6636'/></Text>
            <Text fontSize='18px' color='#1D2026' width='376px' fontWeight={400} px={10}>Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.</Text>
            <Text display='flex' alignItems='end' justifyContent='end'><RiDoubleQuotesL size={30} color='#FF6636'/></Text>
            </Box>
           <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
           <Text color='1D2026' >Sundar Pichai</Text>
            <Text color='#6E7485' fontSize='14px' display='flex' alignItems='center' gap='6px'>Chief Chairman of <Text color='#564FFD' fontSize='14px'>Google</Text></Text>
           </Box>
          </Box>
        </Box>
    </Box>
  )
}
