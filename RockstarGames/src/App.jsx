import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'

import Navbar from './components/Navbar'

import NewsWire from './pages/NewsWire'
import Videos from './pages/Videos'
import Downloads from './pages/Downloads'
import Store from './pages/Store'
import Support from './pages/Support'
import Home from './pages/Home'
import SIgnUp from './pages/SIgnUp'
import SignIn from './pages/SignIn'
const App = () => {
   const [signIn, setSignIn] = useState( !!localStorage.getItem('token')) 
  return (
    <div>
      <Navbar signIn={signIn} setSignIn={setSignIn} />
      <ToastContainer position="top-right" autoClose={3000} />
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/newswire' element={<NewsWire/>} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/downloads" element={<Downloads/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/support" element={<Support/>} />
          <Route path="/signup" element={<SIgnUp/>} />
           <Route path="/signin" element={<SignIn signIn={signIn} setSignIn={setSignIn} />} />
      </Routes>
     
    </div>
  )
}

export default App
