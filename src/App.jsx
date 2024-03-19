import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './Navbar'
import All from './All'
import Fsd from './Fsd'
import Data_sc from './Data_sc'
import Cyber from './Cyber'
import Career from './Career'
import Home from './Home'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/All" element={<All />}></Route>
      <Route path="/Fsd" element={<Fsd />}></Route>
      <Route path="/Data_sc" element={<Data_sc />}></Route>
      <Route path="/Cyber" element={<Cyber />}></Route>
      <Route path="/Career" element={<Career />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
