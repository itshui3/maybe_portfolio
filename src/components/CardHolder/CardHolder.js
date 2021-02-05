
import './CardHolder.css'
import React, { useEffect } from 'react'

import { Arrow } from '../../components'

const items = [
    {},
    {},
    {},
    {},
    {},
    {},
]

function CardHolder() {

    useEffect(() => {
        console.log('init cardholder')
    }, [])

return (
<>

    <div className='card_cont'>
        <div className='card_header'>
            <Arrow rotateProp={{}} />
        </div>
        <div className='card_body'></div>
        <div className='card_footer'>
            <div className='buttons_cont'>
            {
            items.map((item, idx) => (
                <div className='buttons_btn'></div>
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
