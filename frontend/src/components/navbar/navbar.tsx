import React from 'react'
import './navbar.css'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Will replace with company logo */}
      <div className='logo-container'>
        <p style={{fontSize: '1.5em'}}>Logo</p>
      </div>
      
      <FaBars onClick={(e)=>{alert("Button clicked")}} size={30} className='more'/>
    </div>
  )
}

export default Navbar