import React from 'react'
import './clients.css'
import { FaAmazon } from 'react-icons/fa'
import { FaGoogle, FaMicrosoft, FaPaypal } from 'react-icons/fa6'
import { IoLogoVenmo } from 'react-icons/io5'


const Clients = () => {
    return (
    <div className='clients-container'>
        <div className='header-container'>
            <span>Our Clients</span>
        </div>
        <div className='icon-container'>
            <div className='icon'>
                <FaAmazon style={{alignSelf: 'center'}} color='grey' size={60}/>
                <span className='icon-span'>Amazon</span>
            </div>
            <div className='icon'>
                <FaGoogle style={{alignSelf: 'center'}} color='grey' size={60}/>
                <span className='icon-span'>Google</span>
            </div>
            <div className='icon'>
                <FaMicrosoft style={{alignSelf: 'center'}} color='grey' size={60}/>
                <span className='icon-span'>Microsoft</span>
            </div>
            <div className='icon'>
                <FaPaypal style={{alignSelf: 'center'}} color='grey' size={60}/>
                <span className='icon-span'>Paypal</span>
            </div>
            <div className='icon'>
                <IoLogoVenmo style={{alignSelf: 'center'}} color='grey' size={60}/>
                <span className='icon-span'>Venmo</span>
            </div>
        </div>
    </div>
  )
}

export default Clients