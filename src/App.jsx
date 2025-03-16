import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Page_Not_Found from './pages/Page_Not_Found'
import About from './pages/About'
import Skills from './pages/Skills'
import Works from './pages/Works'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/works' element={<Works/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='*' element={<Page_Not_Found/>} />
      </Routes>
    </>
  )
}

export default App
