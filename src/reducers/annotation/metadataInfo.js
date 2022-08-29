import { PLACEHOLDER_IMAGE } from "../../constants/dummies";


const initialState = {
    date: '',
    localTime: '',
    utcTime: '',
    currentImageUrl: PLACEHOLDER_IMAGE,
    currentOtherImageUrl: PLACEHOLDER_IMAGE,
}

export const metadataInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_METADATA_INFO':
            return {
                ...state,
                date: action.date,
                localTime: action.localTime,
                utcTime: action.utcTime,
                currentImageUrl: action.currentImageUrl,
                currentOtherImageUrl: action.currentOtherImageUrl,
            }
        case 'SET_DATE_METADATA_INFO':
            return {
                ...state,
                date: action.date,
            }
        default: 
            return state;
    }
}