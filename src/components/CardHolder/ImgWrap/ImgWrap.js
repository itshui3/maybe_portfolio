
import React from 'react';

import gameOfLife from './images/gameOfLife.PNG';
import gameOfObject from './images/gameOfObject.PNG';
import mightyList from './images/mightyList.PNG';
import sciCalc from './images/sciCalc.PNG';
import snek from './images/snek.PNG';
import tetris from './images/tetris.PNG';

import gameOfLifeGif from './images/2.3.21_gameOfLife.gif';
import gameOfObjectGif from './images/2.3.21_gameofObject.gif';
import mightyListGif from './images/2.3.21_mightyList1.gif';
import sciCalcGif from './images/2.3.21_sciCalc.gif';
import snekGif from './images/2.3.21_snek.gif';
import tetrisGif from './images/2.10.21_tetris.gif';


const assets = [
    {
        img: gameOfLife,
        gif: gameOfLifeGif,

    },

    {
        img: gameOfObject,
        gif: gameOfObjectGif,

    },

    {
        img: mightyList,
        gif: mightyListGif,

    },

    {
        img: sciCalc,
        gif: sciCalcGif,

    },

    {
        img: snek,
        gif: snekGif,

    },

    {
        img: tetris,
        gif: tetrisGif
    }
];

function ImgWrap({ 
    gif, 
    current, 
    handleHover,
    handleUnhover
}) {
/* s2g - 425 / 480 - 850 / 960 */

return (
<>
<img 
className='card_img' 
src={gif ? assets[current].gif : assets[current].img} 

onMouseEnter={handleHover} 
onMouseLeave={handleUnhover} />

</>
);
};

export default ImgWrap;
