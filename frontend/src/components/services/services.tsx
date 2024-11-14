import React, { useState } from 'react'
import './services.css'
import { IoBulbSharp, IoSettingsOutline } from 'react-icons/io5'
import { FaMedapps} from "react-icons/fa6";
import { LuCode2} from "react-icons/lu";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { FaPeopleArrows } from 'react-icons/fa';


const Services = () => {
const [showService, setShowService] = useState(true)
const [showSolution, setShowSolution] = useState(false)
const activeclass:string = "active"

const handleServiceClick = () =>{
    setShowSolution(false)
    setShowService(true)
}
const handleSolutionClick = () =>{
    setShowService(false)
    setShowSolution(true)
}
  return (
    <div style={{marginBottom: '70px'}}>
        <div className='container'>
            {showService ? <div onClick={handleServiceClick} className={activeclass}>Services</div> 
                : <div onClick={handleServiceClick}>Services</div>
            }
            {showSolution ? <div onClick={handleSolutionClick} className={activeclass}>Solutions</div> 
                : <div onClick={handleSolutionClick}>Solutions</div>
            }
        </div>
        {
            showService &&
            <div className='icons-container'>
                <div className='icon-content'>
                    <IoSettingsOutline className='icon' size={60} color='#1d2b77'/>
                    <h5>Implementation</h5>
                </div>
                <div className='icon-content'>
                    <LuCode2 className='icon' size={60} color='#1d2b77'/>
                    <h5>Development & Enhancement</h5>
                </div>
                <div className='icon-content'>
                    <FaMedapps className='icon' size={60} color='#1d2b77'/>
                    <h5>Application Support</h5>
                </div>
                <div className='icon-content'>
                    <IoArrowUpCircleOutline className='icon' size={60} color='#1d2b77'/>
                    <h5>Upgrade</h5>
                </div>
            </div>
        }   
        {
           showSolution && 
            <div className='solutions'>
                <div className='icon-content'>
                    <IoBulbSharp className='icon' size={60} color='#1d2b77'/>
                    <h5>Solution Extension</h5>
                </div>
                <div className='icon-content'>
                    <FaPeopleArrows className='icon' size={60} color='#1d2b77'/>
                    <h5>Business Solutions</h5>
                </div>
            </div>
        }
    </div>
  )
}

export default Services