// <<<<<<< HEAD
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// =======
import { Routes,Route } from 'react-router-dom'
// >>>>>>> 5d06f22db68d335f74f9d0eedc0f127243fa3774
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Home,Events,Courses,Blogs} from './pages'

export default function App(){
  return(
    <>
      <div className="gradient ball-1"></div>
      <div className="gradient ball-2"></div>
      <div className="gradient ball-3"></div>
      <Sidebar/>
      <main>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/blogs' element={<Blogs/>} />

        </Routes>
      </main>
    </>
  )
}