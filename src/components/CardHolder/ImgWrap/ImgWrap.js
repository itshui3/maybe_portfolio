
import React from 'react'

import gameOfLife from './images/gameOfLife.PNG'
import gameOfObject from './images/gameOfObject.PNG'
import mightyList from './images/mightyList.PNG'
import sciCalc from './images/sciCalc.PNG'
import snek from './images/snek.PNG'

// import gameOfLifeGif from './images/2.3.21_gameOfLife.gif'
// import gameOfObjectGif from './images/2.3.21_gameOfObject.gif'
// import mightyListGif from './images/2.3.21_mightyList1.gif'
// import sciCalcGif from './images/2.3.21_sciCalc.gif'
// import snekGif from './images/2.3.21_snek.gif'


// const assets = [

//     {
//         img: gameOfLife,
//         gif: gameOfLifeGif
//     },

//     {
//         img: gameOfObject,
//         gif: gameOfObjectGif
//     },

//     {
//         img: mightyList,
//         gif: mightyListGif
//     },

//     {
//         img: sciCalc,
//         gif: sciCalcGif
//     },

//     {
//         img: snek,
//         gif: snekGif
//     },

// ]

function ImgWrap({ 
    gif, 
    current, 
    handleHover,
    handleUnhover
}) {
    // gif: boolean: do we display gif or png
    // current: Number: which projImg are we on
    // gif ? assets[current].gif : assets[current].img

return (
<>

<img 
className='card_img' 
src={snek} 

onMouseEnter={handleHover} 
onMouseLeave={handleUnhover} />
    
</>
)
}

export default ImgWrap
