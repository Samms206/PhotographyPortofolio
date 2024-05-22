import React from 'react'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import About from '../pages/About'
import Contact from '../pages/Contact'

import {Routes, Route, useLoaction} from 'react-router-dom'

const AnimRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/portofolio' element={<Portfolio/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
}

export default AnimRoutes

