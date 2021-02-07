
import './CardHolder.css';
import React, { useReducer } from 'react';

import { Arrow } from '../../components';
import ImgWrap from './ImgWrap/ImgWrap.js';
// SVGs
import NewTab from './NewTab/NewTab.js';
import InfoCircle from './InfoCircle/InfoCircle.js';
import GitHub from './GitHub/GitHub.js';

import {
    initImg,
    IMG_ACTION,
    imgReducer,
} from './assetBundle.js';

const activeBtnUI = (cur, idx) => {

    if (cur === idx) {return {
        backgroundColor: "rgba(0, 0, 0, 1)",
        transform: "scale(1.4)"
    }} else return {}

};
// render as fn intaking current

function CardHolder() {

    const [display, dispatchDisplay] = useReducer(imgReducer, initImg);

    const handleHover = () => { dispatchDisplay({ type: IMG_ACTION.HOVER }) };

    const handleUnhover = () => { dispatchDisplay({ type: IMG_ACTION.UNHOVER }) };

return (
<>

    <div className='card_cont'>
        <div className='card_body'>
            <div className='card_imgBody'>

            <div className='github_newtab svgs'>
                <GitHub idx={display.current} />
                <NewTab idx={display.current} />
            </div>

            <InfoCircle />

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
                onClick={() => dispatchDisplay({ type: IMG_ACTION.SELECT, payload: idx })}
                ></div>
            ))
            }
            </div>
            <div className='arrows_cont'>
                <Arrow 
                rotateProp={{ transform: 'rotate(-90deg)' }} 
                dir={() => dispatchDisplay({ type: IMG_ACTION.LEFT })}
                />
                <Arrow 
                rotateProp={{ transform: 'rotate(90deg)' }}
                dir={() => dispatchDisplay({ type: IMG_ACTION.RIGHT })}
                />
            </div>
        </div>
    </div>

</>
);
}

export default CardHolder;
