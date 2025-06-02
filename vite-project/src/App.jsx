import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Auth pages/Login'
import Signup from './Auth pages/Signup'
import Dashboard from './Allpages/Dashboard'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
