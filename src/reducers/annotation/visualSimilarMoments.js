import { PLACEHOLDER_IMAGE } from "../../constants/dummies";


const initialState = {
    similarImages: [
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
        PLACEHOLDER_IMAGE,
        PLACEHOLDER_IMAGE,
    ]
}


export const visualSimilarMomentsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
