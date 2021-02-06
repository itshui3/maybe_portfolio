
import './CardHolder.css'
import React, { useReducer } from 'react'

import { Arrow } from '../../components'
import ImgWrap from './ImgWrap/ImgWrap.js'

import {
    initImg,
    IMG_ACTION,
    imgReducer,
} from './assetBundle.js'

const activeBtnUI = (cur, idx) => {

    if (cur === idx) {return {
        backgroundColor: "rgba(255, 255, 255, 1)",
        transform: "scale(1.4)"
    }} else return {}

}
// render as fn intaking current

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
                <div className='buttons_btn' key={idx}
                style={activeBtnUI(display.current, idx)}
                // if current === idx, style should depict clear transform
                ></div>
            ))
            }
            </div>
            <div className='arrows_cont'>
                <Arrow 
                rotateProp={{ transform: 'rotate(-90deg)' }} 
                dir={'left'}
                />
                <Arrow 
                rotateProp={{ transform: 'rotate(90deg)' }}
                dir={'right'}
                />
            </div>
        </div>
    </div>

</>
)
}

export default CardHolder
