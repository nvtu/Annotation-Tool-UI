const initialState = {
    location: '',
    stressLevel: '',
    activity: ''
}


export const annotationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ANNOTATION_DATA':
            return {
                ...state,
                location: action.location,
                stressLevel: action.stressLevel,
                activity: action.activity,
            }
        default:
            return state;
    }
}