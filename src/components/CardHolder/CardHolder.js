
import './CardHolder.css'
import React, { useEffect, useReducer } from 'react'

import { Arrow } from '../../components'

import {
    imgAssets,

    initImg,
    IMG_ACTION,
    imgReducer,
} from './assetBundle.js'

function CardHolder() {

    const [img, dispatchImg] = useReducer(imgReducer, initImg)

    useEffect(() => {
        console.log('init cardholder')
        console.log(img.imgs[img.current])
    }, [])

return (
<>

    <div className='card_cont'>
        <div className='card_header'>
            <Arrow rotateProp={{ transform: 'rotate(-90deg)' }} />
        </div>
        <div className='card_body'>
            <div className='card_imgBody'>
            <img className='card_img'
            src={ img.imgs[img.current].img } alt='a test img' />
            </div>
        </div>
        <div className='card_footer'>
            <div className='buttons_cont'>
            {
            imgAssets.map((item, idx) => (
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
