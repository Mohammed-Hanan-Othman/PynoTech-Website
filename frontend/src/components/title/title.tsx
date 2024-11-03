import React from 'react'
import './title.css'
const Title = ({title}:{title:string}) => {
  return (
    <div className='title-container'>
       <p className='title-text'>{title || 'Default title'}</p>
    </div>
  )
}

export default Title