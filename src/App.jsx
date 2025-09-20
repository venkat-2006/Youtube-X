import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Video from './pages/Video/Video'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>


      </Routes>
      
    </div>
  )
}

export default App
