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
import TopSwiper from '../components/TopSwiper/topSwiper'

const Home = () => {
  const [data , setData] = useState([])
  const [data2 , setData2] = useState([])
  const [loading , setLoading] = useState(true)
  const url = `${api}api/course/with-prices`

  useEffect(() => {
      axios.get(url , {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      }).then((res) => {
          setData(res.data.data)
          setLoading(false)
      })
  } ,[url])


  useEffect(() => {
    window.scroll(0,0)
}, [])
  return (
   <Box>
      <Box pt={5}>
        <TopSwiper />
      </Box>

      <Box display={'flex'}  justifyContent={'center'} alignContent={'center'}  width={'100%'}>
        <TopContent />
      </Box>

      <Box className='wrapper' >
        <Status />
      </Box>

      <Box>
        <AllCourse data={data} loading={loading} />
      </Box>

      <Box>
        <FutureAllCourse  data={data} loading={loading} />
      </Box>

      <Box>
        <AllMentors  loading={loading} />
      </Box>


    

      <Box>
        <EnterWork />
      </Box>

   </Box>
  )
}

export default Home