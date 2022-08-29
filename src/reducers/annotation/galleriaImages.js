import { PLACEHOLDER_IMAGE } from '../../constants/dummies';


const initialState = {
    currentIndex: 0,
    galleriaImages: [
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
    ]
}


export const galleriaImagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_GALLERIA_IMAGES':
            return {
                ...state,
                galleriaImages: action.galleriaImages,
            }
        case 'SET_GALLERIA_CURRENT_INDEX':
            return {
                ...state,
                currentIndex: action.currentIndex,
            }
        default:
            return state;
    }
}