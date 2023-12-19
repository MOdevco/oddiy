import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { api } from '../../api/api'
const ImageGet = ({id}) => {
  return (
    <Box>
        <Image src={`${api}api/image/?id=${id}`} width={'100%'} height={'300'} ></Image>
    </Box>
  )
}

export default ImageGet