import React from 'react'
import './banner.css'
const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-title-container'>
            <h3 className='banner-title'>Welcome to </h3>       
            <h3 className='banner-subtitle'>PYNOTECH SOLUTIONS</h3>
        </div>
        <div className='banner-main-text-container'>
            <p className='banner-main-text'>We build solutions for your business to reach new heights.</p>
        </div>
        <div className='banner-btn-container'>
            <button className='solutions-btn'>Our Services</button>
            <button className='contact-btn'>Contact Us</button>
        </div>
    </div>

  )
}

export default Banner