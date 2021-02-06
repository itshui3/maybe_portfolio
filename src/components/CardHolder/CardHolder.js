
import './CardHolder.css'
import React, { useEffect } from 'react'

import { Arrow } from '../../components'

import { imgAssets } from './imgAssets'

function CardHolder() {

    useEffect(() => {
        console.log('init cardholder')
        console.log(imgAssets[0].img)
    }, [])

return (
<>

    <div className='card_cont'>
        <div className='card_header'>
            <Arrow rotateProp={{}} />
        </div>
        <div className='card_body'>
            <img src='gameOfLife.PNG' alt='a test img' />
        </div>
        <div className='card_footer'>
            <div className='buttons_cont'>
            {
            imgAssets.map((item, idx) => (
                <div className='buttons_btn' key={idx}></div>
            ))
            }
            </div>
            <Arrow rotateProp={{ transform: 'rotate(180deg)' }}/>
        </div>
    </div>

</>
)
}

export default CardHolder
