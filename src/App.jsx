import React from 'react'
import Home from './home/Home'
import { Routes, Route } from 'react-router-dom'
import Courses from './courses/Courses'
import list from '../public/list.json'
import Signup from './component/Signup'
import Contact from './component/Contact'

function App() {
  console.log(list)
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
