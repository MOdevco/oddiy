import { Box, Button, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import { Textarea } from '@chakra-ui/react'
const Contact = () => {
  return (
    <Box minHeight={'69.7vh'} width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'} >
        <Box>
            <Heading textAlign={'center'}>Murojatingizni yozing</Heading>
        </Box>

        <Box mt={10} >
            <Box >
                <Box mt={2}>
                    <FormControl isRequired>
                        <FormLabel>Xabar</FormLabel>
                        <Textarea  isInvalid width={{base: '100%' , md: '820px'}}  height={'200px'} placeholder='xabar...' />
                    </FormControl>
                </Box>

                <Box>
                    <Button _hover={{bg:''}} _active={{bg: ''}} bg={'green'} mt={5} color={'white'} width={'200px'}>Jo'natish</Button>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Contact