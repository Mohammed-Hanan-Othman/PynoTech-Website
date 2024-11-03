import React from 'react'
import './navbar.css'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Will replace with company logo */}
      <p>Logo</p>
      <FaBars className='more'/>
    </div>
  )
}

export default Navbar