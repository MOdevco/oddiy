import {Box} from '@chakra-ui/react'
import TopContent from '../components/topContent/topContent'
import Status from '../components/status/status'
import EnterWork from '../components/enterWork/enterWork'
import { useEffect, useState } from 'react'
import AllCourse from '../components/allCourse/allCourse'
import FutureAllCourse from '../components/futureAllCourse/futureAllCourse'
import AllMentors from '../components/allMentors/allMentors'
import axios from 'axios'
import { api } from '../api/api'

const Home = () => {
  const [data , setData] = useState([])
  const [data2 , setData2] = useState([])
  const url = `${api}api/course/with-prices`

  useEffect(() => {
      axios.get(url , {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      }).then((res) => {
          setData(res.data.data)
      })
  } ,[url])


  useEffect(() => {
    window.scroll(0,0)
}, [])
  return (
   <Box>
      <Box display={'flex'}   justifyContent={'center'} alignContent={'center'}  width={'100%'}>
        <TopContent />
      </Box>

      <Box className='wrapper' >
        <Status />
      </Box>

      <Box>
        <AllCourse data={data} />
      </Box>

      <Box>
        <FutureAllCourse  data={data} />
      </Box>

      <Box>
        <AllMentors />
      </Box>


    

      <Box>
        <EnterWork />
      </Box>

   </Box>
  )
}

export default Home