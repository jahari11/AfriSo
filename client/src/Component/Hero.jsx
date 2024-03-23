import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero">
        <div className='sep'>
          <img src="https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <span>Latest Cosmetics</span>
        </div>
        <div className='mid'>
          <img src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <span><span className="gold">Afri </span>Body Care</span>
        </div>
        <div className='sep'>
          <img src="https://images.unsplash.com/photo-1611930021559-4a5cb5c38da3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <span>Cosmetics to improve apperance</span>
        </div>
    </div>
  )
}

export default Hero