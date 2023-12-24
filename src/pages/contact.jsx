import { Box, Button, Heading, Input, Text, position, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
const Contact = () => {
   
    return (
        <Box width={'100%'} display={'flex'} minHeight='71.2vh' flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'} pb={'30px'}>
            <Box>
                <Heading textAlign={'center'}>Murojatingizni yozing</Heading>
            </Box>
            <Box mt={2} >
                <Box >
                    <Box mt={2}>
                        <FormControl isRequired display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap={5}>
                            <FormLabel>Xabar Jo'natish uchun</FormLabel>
                            <Textarea width={{ base: '100%', md: '420px' }} border='none' height={'200px'} placeholder='xabar...' />
                        </FormControl>
                    </Box>

                    <Box pt={5} pb={{sm:'100px', md:'0px'}}>
                        <Button color={'#000'} >Jo'natish</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact