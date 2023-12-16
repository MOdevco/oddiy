import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
const ImageGet = ({id}) => {
  return (
    <Box>
        <Image src={`http://192.168.158.66:8080/api/image/?id=${id}`} width={'100%'} ></Image>
    </Box>
  )
}

export default ImageGet