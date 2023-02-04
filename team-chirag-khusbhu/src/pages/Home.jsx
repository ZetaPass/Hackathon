import React from 'react'
import Card from '../components/Card'

const Home = () => {
  return (
    <div>
      <div className='heading'>
        <h2>Events</h2>
        <p>View all</p>
      </div>
      <div className="carousel">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Home
