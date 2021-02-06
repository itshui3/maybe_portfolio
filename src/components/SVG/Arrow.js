
import './Arrow.css'
import React, { useState } from 'react'

const sWidth = (num) => num.toString()

const sColorWhite = (emphasis) => {
    return !emphasis 
            ? 
            "rgba(255, 255, 255, 0.6)"
            :
            emphasis > 0
            ?
            "rgba(255, 255, 255, 1)"
            :
            "rgba(255, 255, 255, 0.85)"
}

function Arrow({ rotateProp, dir }) {

    const [emphasis, setEmphasis] = useState(0)

return (
<>
    <svg className='arrow_SVG' height='25px' width='25px'
    style={rotateProp}

    onMouseDown={() => setEmphasis(1)}
    onMouseUp={() => setEmphasis(-1)}
    onMouseEnter={() => setEmphasis(-1)}
    onMouseLeave={() => setEmphasis(0)}
    
    onClick={dir}>
        <line x1='0%' y1="75%" x2="50%" y2="0%" 
        stroke={sColorWhite(emphasis)} strokeWidth={sWidth(emphasis ? 3.1 : 3)}
        />
        <line x1="50%" y1="0%" x2="100%" y2="75%" 
        stroke={sColorWhite(emphasis)} strokeWidth={sWidth(emphasis ? 2.1 : 2)}
        />
    </svg>
</>
)
}

export default Arrow
