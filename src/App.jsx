import { Box } from '@chakra-ui/react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import NoteFount from './pages/404'
import AllRegiste from './components/allRegister/allRegiste'
import { useEffect } from 'react'
import News from './pages/news'
import Contact from './pages/contact'
import Aplication from './pages/aplication'
import Courses from './pages/courses'
import ReseptionCourse from './pages/reseptionCourse'
import About from './pages/about'
function App() {


  useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
    <Box >
      {/* for navbar */}
      <Box mb={10}>
        <Navbar />
      </Box>

      {/* for routes */}
      <Box>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/allRegister' element={<AllRegiste />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/contact' element={<Contact  />}></Route>
          <Route path='/aplication' element={<Aplication  />}></Route>
          <Route path='/about' element={<About  />}></Route>
          <Route path='/reseptionCourse/:id' element={<ReseptionCourse />}></Route>
          <Route path='*' element={<NoteFount />}></Route>
        </Routes>
      </Box>


      {/* for footer */}
      <Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default App
