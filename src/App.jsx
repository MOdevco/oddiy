import { Box } from '@chakra-ui/react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import NoteFount from './pages/404'
import AllRegiste from './components/allRegister/allRegiste'
import { useEffect, useState } from 'react'
import Contact from './pages/contact'
import Aplication from './pages/aplication'
import ReseptionCourse from './pages/reseptionCourse'
import About from './pages/about'
import FullDesc from './pages/fullDesc'
function App() {
  const [dataVal ,setDataVal] = useState('')



  useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
    <Box >
      {/* for navbar */}
      <Box mb={20}>
        <Navbar />
      </Box>

      {/* for routes */}
      <Box>
        <Routes>
          <Route path='/' element={<Home setDataVal={setDataVal} />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/allRegister' element={<AllRegiste />}></Route>
          <Route path='/contact' element={<Contact  />}></Route>
          <Route path='/aplication' element={<Aplication  />}></Route>
          <Route path='/about' element={<About  />}></Route>
          <Route path='/reseptionCourse/:id' element={<ReseptionCourse />}></Route>
          <Route path='*' element={<NoteFount />}></Route>
          <Route path='/fullDesc' element={<FullDesc dataVal={dataVal} />}></Route>
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
