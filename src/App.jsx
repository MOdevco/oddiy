import { Box } from '@chakra-ui/react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import Teachers from './pages/teachers'
import NoteFount from './pages/404'
import AllRegiste from './components/allRegister/allRegiste'
function App() {

  return (
    <Box >
      {/* for navbar */}
      <Box>
        <Navbar />
      </Box>

      {/* for routes */}
      <Box>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/teachers' element={<Teachers />}></Route>
          <Route path='/allRegister' element={<AllRegiste />}></Route>
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
