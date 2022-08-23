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
        default:
            return state;
    }
}