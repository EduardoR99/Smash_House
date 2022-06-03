import React from 'react';
import './style.css'

const Food = (props) => {
  return (
    <div className='food'>
        <div style={{background: `url('${props.bgImg}') no-repeat center center/cover`}} className="container">
            <div style={{background: `url('${props.bgImg1}') no-repeat center center/cover`}} className="left-side"></div>
            <div style={{background: `url('${props.bgImg2}') no-repeat center center/cover`}} className="left-right"></div>
        </div>
    </div>
  )
}

export default Food