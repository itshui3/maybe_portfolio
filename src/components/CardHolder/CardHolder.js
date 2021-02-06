
import './CardHolder.css'
import React, { useEffect, useReducer } from 'react'

import { Arrow } from '../../components'
import ImgWrap from './ImgWrap/ImgWrap.js'

import {

    initImg,
    IMG_ACTION,
    imgReducer,
} from './assetBundle.js'

function CardHolder() {

    const [display, dispatchDisplay] = useReducer(imgReducer, initImg)

    const handleHover = () => {
        dispatchDisplay({ type: IMG_ACTION.HOVER })
    }

    const handleUnhover = () => {
        dispatchDisplay({ type: IMG_ACTION.UNHOVER })
    }

return (
<>

    <div className='card_cont'>
        <div className='card_header'>
            <Arrow rotateProp={{ transform: 'rotate(-90deg)' }} />
        </div>
        <div className='card_body'>
            <div className='card_imgBody'>

            <ImgWrap 
            gif={display.gif}
            current={display.current}
            handleHover={handleHover}
            handleUnhover={handleUnhover}
            />
            
            </div>
        </div>
        <div className='card_footer'>
            <div className='buttons_cont'>
            {
            [0, 1, 2, 3, 4].map((item, idx) => (
                <div className='buttons_btn' key={idx}></div>
            ))
            }
            </div>
            <Arrow rotateProp={{ transform: 'rotate(90deg)' }}/>
        </div>
    </div>

</>
)
}

export default CardHolder
