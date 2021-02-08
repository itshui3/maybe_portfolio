
import produce from 'immer';

const projectTitles = [
    "Game Of Life",
    "Game Of Object",
    "Mighty List",
    "Calculator",
    "Snek"
];

const projectDesc = [
    // GoL
    "Conway's Game of Life is a grid of cell that can be described as existing in a runtime of 'turns'. In each turn, it's expected that cells with two or three living neighbor cells will either live on or become alive. Everything else dies. This allows for shapes to progress in visually interesting ways and for patterns to emerge.",
    // GoO
    "Game of Object is a MUD(Multi-User Dungeon). Some features include movement, combat, NPC interaction, random monster generation, and item interactions. I worked on this with a team and was primarily responsible for the back-end Flask API as well some mechanics.",
    // Mighty List
    "Mighty List organizes drag & drop tasks in a nested data structure that's rendered as indented open/close tabs. It's sort of like basic Trello + basic Notion.",
    // Calculator
    "Calculator can perform functional computations like log and exponents in addition to the usual calculation sequence. I based the sequential calculation case handling close to how my native windows calculation behaves. (ie. pressing an operator sometimes performs the next calculation, sometimes does nothing, etc...)",
    // Snek
    "Snek, or Snake, is a classic game in which the user controls a snake to move in cardinal directions on a 2D grid. The objective is to consume food and grow your snake without bumping into walls or other parts of the snake's body.",
]

const lastProjIndex = 4;

const initImg = {
    current: 0,
    gif: 0,
    // determines whether we display img: 0 or gif: 1
    desc: false,
    // determines whether description is showing
};

const IMG_ACTION = {
    LEFT: 'carousel_left',
    RIGHT: 'carousel_right',

    SELECT: 'carousel_select',

    HOVER: 'display_hover_lsjerlajse',
    UNHOVER: 'display_unHover_lkjserlj',

    DESC: 'show&unshowDesc_lsekjral'
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

                if (draft.desc) {
                    draft.desc = false
                }
            });

        case IMG_ACTION.LEFT:
            return produce(state, draft => {
                if (draft.current > 0) {
                    draft.current -= 1;
                }

                if (draft.desc) {
                    draft.desc = false
                }
            });

        case IMG_ACTION.SELECT:
            return produce(state, draft => {
                if (payload >= 0 && payload < lastProjIndex+1) {
                    draft.current = payload;
                }

                if (draft.desc) {
                    draft.desc = false
                }
            });

        case IMG_ACTION.DESC:
            return produce(state, draft => {
                draft.desc = !draft.desc
            })

        default:
            return state;
    }

};

export {
    projectTitles,
    projectDesc,
    initImg,
    IMG_ACTION,
    imgReducer,
}