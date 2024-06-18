import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Header } from './Components/Header'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Projects } from './Pages/Projects'
import { Footer } from './Components/Footer'

export const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
