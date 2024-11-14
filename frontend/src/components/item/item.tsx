import React, { ReactElement } from 'react'
import './item.css'
import { IoMdSettings } from "react-icons/io";

// const Item = ({text,icon,link}:{text:string, icon?:ReactElement | any, link:string}) => {
//   return (
//     <div>
//         <h5>{text}</h5>

//     </div>
//   )
// }
const Item = ({text,icon,link}
    :{text?:string, icon?:ReactElement | any, link?:string}
) => {
    return (
        <a className='item-link' href={link || 'https://www.pynotechsolutions.com'}>
        <div className='item-container'>
                {icon || <IoMdSettings className='icon' size={50} color='#1d2b77'/>}
                <h5 className='icon-text'>{text || 'Implementation'}</h5>
        </div>
        </a>
    )

}
export default Item