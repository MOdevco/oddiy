import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { manku } from '../assets'

export default function About() {
  return (
    <Box>
   <Box  minHeight='100vh' display='flex' alignItems='center' justifyContent='center'>
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
   <Box display='flex' alignItems='center' justifyContent='center'>
    <img src={manku} alt="" />
    <Box>
      <Text color='#FF6636' fontSize='16px' fontWeight='500'>OUR ONE BILLION MISSION</Text>
      <Text color='#1D2026' fontWeight='700' fontSize='40px'>Our one billion mission sounds bold, We agree.</Text>
      <Text>"We cannot solve our problems with the same thinking we used when we created them."—Albert Einstein. Institutions are slow to change. Committees are where good ideas and innovative thinking go to die. Choose agility over dogma. Embrace and drive change. We need to wipe the slate clean and begin with bold, radical thinking.</Text>
    </Box>
   </Box>
    </Box>
  )
}
