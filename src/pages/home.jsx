import {Box} from '@chakra-ui/react'
import TopContent from '../components/topContent/topContent'
import Status from '../components/status/status'
import Course from '../components/course/course'
import TeacherStatus from '../components/teacherStatus/teacherStatus'
import EnterWork from '../components/enterWork/enterWork'
import OurTeachers from '../components/ourTeachers/ourTeachers'

const Home = () => {
  return (
   <Box pt={'50px'}>
      <Box display={'flex'} className='wrapper'  justifyContent={'center'} alignContent={'center'}  width={'100%'}>
        <TopContent />
      </Box>

      <Box className='wrapper' >
        <Status />
      </Box>


      <Box>
        <Course />
      </Box>

      <Box>
        <TeacherStatus />
      </Box>


      <Box>
        <EnterWork />
      </Box>


      <Box>
        <OurTeachers />
      </Box>
   </Box>
  )
}

export default Home