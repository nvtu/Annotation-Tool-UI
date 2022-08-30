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
        case 'SET_ANNOTATION_FIELD_DATA':
            if (action.field === 'location') {
                return {
                    ...state,
                    location: action.value,
                }
            }
            else if (action.field === 'stress_level') {
                return {
                    ...state,
                    stressLevel: action.value,
                }
            }
            else if (action.field === 'activity') {
                return {
                    ...state,
                    activity: action.value,
                }
            }
        default:
            return state;
    }
}