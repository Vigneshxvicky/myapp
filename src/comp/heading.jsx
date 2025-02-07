import React from 'react'
import "./heading.css"  
const heading = () => {
  return (
    <div>
        <h1 className='display-3 text-info'><span className='display-1'>O</span>RBIT'Z <span className='display-1'>E</span>vents</h1>
        <hr />
        <a href="tel:+91-934-561-7081" className='btn btn-secondary'>Call us </a>
    </div>
  )
}

export default heading