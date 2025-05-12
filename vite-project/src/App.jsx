import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/contact'
import Error from './pages/error'
import Preview from './pages/preview'
import Service from './pages/Service'
import Dashboard from './pages/Dashboard'
import Contents from './pages/Contents'
import Login from './pages/Login'

export default function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/*' element={<Error />}></Route>
          <Route path='/details' element={<Preview/>}  />
          <Route path='/dashboard' element={<Dashboard/>}  />
          <Route path='/content' element={<Contents />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}