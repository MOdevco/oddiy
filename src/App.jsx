import { Box, Button } from '@chakra-ui/react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { Route, Router, Routes, useNavigate } from 'react-router-dom'
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
import ScrollToTop from 'react-scroll-to-top'
import {GoMoveToTop} from 'react-icons/go'
import MyCourse from './pages/myCourse'
function App() {
  const [dataVal ,setDataVal] = useState('')
  const [scroll, setScroll] = useState(false);
  const navigation = useNavigate()
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if(localStorage.getItem('token')) {
      navigation('/home')
    } else {
      navigation('/')
    }
  } ,[localStorage.getItem('token')])


  useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (

    
    <Box >

      {scroll && (
        <Box position={"fixed"} zIndex={20} right={"30px"} bottom={"30px"}>
          <Button
            height={"60px"}
            _hover={{ bg: "#000" }}
            onClick={handleScroll}
            bg={"#000"}
          >
            <GoMoveToTop color="white" fontSize={"30px"} />
          </Button>
        </Box>
      )}
      {/* for navbar */}
      <Box mb={{base:'20px' , md: '78px'}}>
        <Navbar />
      </Box>

      {/* for routes */}
      <Box>
        <Routes>
          <Route path='/home' element={<Home setDataVal={setDataVal} />}></Route>
          <Route path='/' element={<Register />}></Route>
          <Route path='/allRegister' element={<AllRegiste />}></Route>
          {/* <Route path='/contact' element={<Contact  />}></Route> */}
          <Route path='/aplication' element={<Aplication  />}></Route>
          <Route path='/about' element={<About  />}></Route>
          <Route path='/reseptionCourse/:id' element={<ReseptionCourse />}></Route>
          <Route path='*' element={<NoteFount />}></Route>
          <Route path='/fullDesc' element={<FullDesc dataVal={dataVal} />}></Route>
          <Route path='/myCourse' element={<MyCourse />}></Route>
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
