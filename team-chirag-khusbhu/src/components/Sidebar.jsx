import React from 'react'
import './Sidebar.css';

 function Sidebar() {
  return (
    <>
     <div className='side_bar_container'>
       <div className='profile'></div>
        <div className="sidebar">
          <div className='Home'>
          <span class="material-symbols-outlined" > home</span>
          <a className="active" href="#home">Home</a></div>
          <span class="material-symbols-outlined" > home</span>
          <a href="#Courses">Courses</a>
          <span class="material-symbols-outlined" > home</span>
          <a href="#Event">Event</a>
          <span class="material-symbols-outlined" > home</span>
          <a href="#Blogs">Blogs</a>
        </div>
     </div>
    </>
  )
}
export default Sidebar;