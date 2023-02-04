import React from 'react'
import './Sidebar.css';

 function Sidebar() {
  return (
    <>
     
       
        <div className="sidebar">
          <div className='profile'></div>
          
          <span class="material-symbols-outlined" > home</span>
          <a className="active" href="#home">Home</a>
          <span class="material-symbols-outlined" > home</span>
          <a href="#Courses">Courses</a>
          <span class="material-symbols-outlined" > home</span>
          <a href="#Event">Event</a>
          <span class="material-symbols-outlined" > home</span>
          <a href="#Blogs">Blogs</a>
        
     </div>
    </>
  )
}
export default Sidebar;