import React from 'react'
import CV from '../../assets/cv.pdf'

function button() {
  return (
    <div className="button">
      <a href={CV} download className='btn'> Download CV</a>
    </div>
  ) 
}

export default button