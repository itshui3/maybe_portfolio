
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

    useEffect(() => {
        console.log('GoLGif', GoLGif)
        console.log('display gif', display.assets[display.current].gif)


    }, [])

return (
<>

    <div className='card_cont'>
        <div className='card_header'>
            <Arrow rotateProp={{ transform: 'rotate(-90deg)' }} />
        </div>
        <div className='card_body'>
            <div className='card_imgBody'>

            {/* <img 
            className='card_img' 
            src={display.gif ? display.assets[display.current].gif : display.assets[display.current].img} 
            
            onMouseEnter={() => dispatchDisplay({ type: IMG_ACTION.HOVER })} 
            onMouseLeave={() => dispatchDisplay({ type: IMG_ACTION.UNHOVER })} /> */}
            <ImgWrap 
            gif={display.gif}
            current={display.current}
            HOVER={IMG_ACTION.HOVER}
            UNHOVER={IMG_ACTION.UNHOVER}
            />
            
            </div>
        </div>
        <div className='card_footer'>
            <div className='buttons_cont'>
            {
            display.assets.map((item, idx) => (
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
