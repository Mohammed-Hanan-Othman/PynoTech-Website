import React from 'react'
import './credentials.css'
import { FaCloud } from 'react-icons/fa'
import { IoEarthSharp, IoPeople } from 'react-icons/io5'
import { FaRegClock } from 'react-icons/fa'


const Credentials = () => {
  return (
    <div className='credentials-container'>
        <div className='credentials'>
            <h2>Credentials</h2>
            <div className='content-container'>
                <div className='credential-content'>
                    <FaCloud size={80} color='#1d2b77'/>
                    <h5 className='number'>4</h5>
                    <h5 className='content'>cloud engagement</h5>
                </div>
                <div className='credential-content'>
                    <IoEarthSharp size={80} color='#1d2b77'/>
                    <h5 className='number'>5+</h5>
                    <h5 className='content'>countries</h5>
                </div>
                <div className='credential-content'>
                    <FaRegClock size={80} color='#1d2b77'/>
                    <h5 className='number'>10+ YEARS</h5>
                    <h5 className='content'>experience</h5>
                </div>
                <div className='credential-content'>
                    <IoPeople size={80} color='#1d2b77'/>
                    <h5 className='number'>40+</h5>
                    <h5 className='content'>cloud consultants</h5>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Credentials