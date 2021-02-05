
import './Arrow.css'
import React from 'react'

function Arrow({ rotateProp }) {
return (
<>
    <svg className='arrow_SVG' height='50px' width='50px'
    style={rotateProp}>
        <line x1='0%' y1="75%" x2="50%" y2="0%" 
        stroke="white"
        />
        <line x1="50%" y1="0%" x2="100%" y2="75%" 
        stroke="white"
        />
    </svg>
</>
)
}

export default Arrow
