import { PLACEHOLDER_IMAGE } from "../../constants/dummies";


const initialState = {
    user: '',
    date: '',
    localTime: '',
    utcTime: '',
    currentImageUrl: PLACEHOLDER_IMAGE
}

export const metadataInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}