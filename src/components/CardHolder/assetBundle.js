
import produce from 'immer'

const initImg = {
    current: 0,
    gif: 0,
    // display determins whether we display img: 0 or gif: 1
}

const IMG_ACTION = {
    LEFT: 'carousel_left',
    RIGHT: 'carousel_right',

    HOVER: 'display_hover_lsjerlajse',
    UNHOVER: 'display_unHover_lkjserlj'
}

const imgReducer = (state, { type, payload }) => {

    switch(type) {

        case IMG_ACTION.HOVER:
            return produce(state, draft => {
                draft.gif = 1
            })

        case IMG_ACTION.UNHOVER:
            return produce(state, draft => {
                draft.gif = 0
            })

        default:
            return state
    }

}

export {

    initImg,
    IMG_ACTION,
    imgReducer,
}