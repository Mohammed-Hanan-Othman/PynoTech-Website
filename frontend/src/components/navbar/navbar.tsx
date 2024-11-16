import React, {useState, useEffect} from 'react'
import './navbar.css'
import { FaBars } from "react-icons/fa";
import { FaX } from 'react-icons/fa6';

const Navbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  
  return (
    <div className='navbar'>
      {/* Will replace with company logo */}
      <div className='logo-container'>
        <p style={{fontSize: '1.5em'}}>PynoTech</p>
      </div>
      <ul className='links'>
        <li><a href="">Home</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">About</a></li>
      </ul>

      <FaBars className='more'
        onClick={(e)=>{
            // alert("Button clicked")
            setIsSideBarOpen(true)
          }} 
        size={30} 
        />

      {isSideBarOpen &&  
        <ul className='sidebar'>
          <li>
            <a>
              <FaX  className='close' size={30} 
              onClick={(e) => setIsSideBarOpen(false)}/>
            </a>
          </li>
          <li><a href="">Home</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">About</a></li>
        </ul>
      } 

    </div>
  )
}

export default Navbar


{/* {isSideBarOpen?
<div className="links">
</div>   
: 'this div'
} */}
{/* <ul>
  <li><a href="#">About</a></li>
  <li><a href="#">Help</a></li>
  <li><a href="#">Contact</a></li>
</ul> */}
{/* <FaBars style={{border:'1px solid green'}} 
  onClick={(e)=>{
    alert("Button clicked")
    setIsSideBarOpen(true)
  }} 
  size={30} 
  className='more'/> */}