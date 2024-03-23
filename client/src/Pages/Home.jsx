import React from 'react'
import Navbar from '../Component/Navbar'
import Subscribe from '../Component/Subscribe'
import Hero from '../Component/Hero'

const Home = () => {
  return (
    <div className='section'>
        <Navbar />
        <Hero />
        <Subscribe />
    </div>
  )
}

export default Home