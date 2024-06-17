import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signout from "./pages/Signout"
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/sign-out' element={<Signout />} />
      <Route path='/sign-in' element={<Signin />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App