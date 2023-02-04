import React from 'react'
import Home from './pages/Home';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Blogs from './pages/Blogs';
 function Sidebar() {
  return (
    <div>
        <Home/>
        <Courses/>
        <Blogs/>
        <Events/>
    </div>
  )
}
export default Sidebar;