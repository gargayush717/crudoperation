import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Auth pages/Login'
import Signup from './Auth pages/Signup'
import Dashboard from './Allpages/Dashboard'
import Read from './Allpages/Read'
import Create from './Allpages/Create'
import Update from './Allpages/Update'
import Search from './Allpages/Search'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/dashboard' element={<Dashboard/>}>
    <Route index element={<Read/>}/>
    <Route path='read' element={<Read/>}/>
    <Route path='create' element={<Create/>}/>
    <Route path='update' element={<Update/>}/>
    <Route path='search' element={<Search/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
