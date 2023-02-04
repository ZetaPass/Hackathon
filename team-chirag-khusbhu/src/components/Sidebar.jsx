import React from 'react'
import './Sidebar.css';
 function Sidebar() {
  return (
    <>
     <div className='side_bar_container'>
       <div className='profile'></div>
        <div class="sidebar">
          <a class="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
     </div>
    </>
  )
}
export default Sidebar;