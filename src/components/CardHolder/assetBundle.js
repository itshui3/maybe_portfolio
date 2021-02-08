
import produce from 'immer';

const projectTitles = [
    "Game Of Life",
    "Game Of Object",
    "Mighty List",
    "Calculator",
    "Snek"
];

const lastProjIndex = 4;

const initImg = {
    current: 0,
    gif: 0,
    // display determins whether we display img: 0 or gif: 1
};

const IMG_ACTION = {
    LEFT: 'carousel_left',
    RIGHT: 'carousel_right',

    SELECT: 'carousel_select',

    HOVER: 'display_hover_lsjerlajse',
    UNHOVER: 'display_unHover_lkjserlj'
};

const imgReducer = (state, { type, payload }) => {

    switch(type) {

        case IMG_ACTION.HOVER:
            return produce(state, draft => {
                draft.gif = 1;
            });

        case IMG_ACTION.UNHOVER:
            return produce(state, draft => {
                draft.gif = 0;
            });

        case IMG_ACTION.RIGHT:
            return produce(state, draft => {
                if (draft.current < lastProjIndex) {
                    draft.current += 1;
                }
            });

        case IMG_ACTION.LEFT:
            return produce(state, draft => {
                if (draft.current > 0) {
                    draft.current -= 1;
                }
            });

        case IMG_ACTION.SELECT:
            return produce(state, draft => {
                if (payload >= 0 && payload < lastProjIndex+1) {
                    draft.current = payload;
                }
            });

        default:
            return state;
    }

};

export {
    projectTitles,
    initImg,
    IMG_ACTION,
    imgReducer,
}