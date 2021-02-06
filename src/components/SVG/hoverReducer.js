
import produce from 'immer'

const hoverInit = {
    left: false,
    right: false
}

const ACTION = {

    HOVER_LEFT: 'hover_left_ljelrsje',
    UNHOVER_LEFT: 'unhover_left_ljasl;ejr',

    HOVER_RIGHT: 'hover_right_lajwerl;',
    UNHOVER_RIGHT: 'unhover_right_lajewuh'

}

const hoverReducer = (state, {type, payload}) => {

    switch(type) {

        case ACTION.HOVER_LEFT:
            return produce(state, draft => {
                draft.left = true
            })

        case ACTION.UNHOVER_LEFT:
            return produce(state, draft => {
                draft.left = false
            })

        case ACTION.HOVER_RIGHT:
            return produce(state, draft => {
                draft.right = true
            })

        case ACTION.UNHOVER_RIGHT:
            return produce(state, draft => {
                draft.right = false
            })

        default:
            return state
    }
}

export {
    hoverInit,
    ACTION,
    hoverReducer,
    
}