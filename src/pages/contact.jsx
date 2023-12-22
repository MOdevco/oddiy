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
    const [value, setValue] = useState("")
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [valid, setValid] = useState(false);
    const [valid1, setValid1] = useState(false);
    const [valid2, setValid2] = useState(false);
  const toast = useToast()

    const show1 = () => {
        if(value == ''){
            setValid(true)
        } 
        else{
            toast({
                title: 'Xabar',
                description: "Ma'lumot jo'natildi.",
                status: 'success',
                position:'top-right',
                duration: 800,
                isClosable: true,
              })
        }
    }
    return (
        <Box width={'100%'} display={'flex'} height='71.2vh' flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'} >
            <Box>
                <Heading textAlign={'center'}>Murojatingizni yozing</Heading>
            </Box>
            <Box mt={2} >
                <Box >
                    <Box mt={2}>
                        <FormControl isRequired display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap={0}>
                            <FormLabel>Xabar Jo'natish uchun</FormLabel>
                            <Input isInvalid={value.length  > 0 ? false : true} placeholder='Name' width={420} onChange={(e) => setValue(e.target.value)} value={value}></Input>
                            <Input isInvalid={value1.length  > 0 ? false : true} placeholder='Email' width={420} onChange={(e) => setValue1(e.target.value)} value={value1}></Input>
                            <Textarea onChange={(e) => setValue2(e.target.value)} value={value2} isInvalid={value2.length  > 0 ? false : true} width={{ base: '100%', md: '420px' }} border='none' height={'200px'} placeholder='xabar...' />
                            {valid ? <Text>Malumot toliq emas</Text> : null}
                        </FormControl>
                    </Box>

                    <Box pt={5}>
                        <Button color={'white'} className='button type1' onClick={show1}></Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact