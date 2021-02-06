
import produce from 'immer'

import gameOfLife from './images/gameOfLife.PNG'
import gameOfObject from './images/gameOfObject.PNG'
import mightyList from './images/mightyList.PNG'
import sciCalc from './images/sciCalc.PNG'
import snek from './images/snek.PNG'

// import gameOfLifeGif from './gifs/2.3.21_gameOfLife.gif'
// import gameOfObjectGif from './gifs/2.3.21_gameOfObject.gif'
// import mightyListGif from './gifs/2.3.21_mightyList1.gif'
// import sciCalcGif from './gifs/2.3.21_sciCalc.gif'
// import snekGif from './gifs/2.3.21_snek.gif'

const imgAssets = [
    {
        img: gameOfLife,
        // gif: gameOfLifeGif
    },

    {
        img: gameOfObject,
        // gif: gameOfObjectGif
    },

    {
        img: mightyList,
        // gif: mightyListGif
    },

    {
        img: sciCalc,
        // gif: sciCalcGif
    },

    {
        img: snek,
        // gif: snekGif
    },
]

const initImg = {
    current: 0,
    imgs: imgAssets
}

const IMG_ACTION = {
    LEFT: 'carousel_left',
    RIGHT: 'carousel_right',

}

const imgReducer = (state, { type, payload }) => {

    switch(type) {
        default:
            return state
    }

}

export {
    imgAssets,

    initImg,
    IMG_ACTION,
    imgReducer,
}