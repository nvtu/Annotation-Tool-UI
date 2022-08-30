const initialState = {
    locationList: ['Dublin City University',
        'Home',
    ],
    stressLevelList: ['Relaxed', 'Low Stress', 'Medium Stress', 'High Stress'],
    activityList: ['Sitting', 'Walking', 'Running', 'Standing', 'Cycling', 'Driving', 'Riding', 'Hiking', 'Swimming', 'Biking', 'Other'],
}


export const annotationListDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ANNOTATION_LIST_DATA":
            return {
                ...state,
                locationList: action.locationList,
                stressLevelList: action.stressLevelList,
                activityList: action.activityList,
            }
        case 'UPDATE_NEW_ANNOTATION_LIST':
            if (action.listType === 'location') {
                return {
                    ...state,
                    locationList: action.dataList,
                }
            }
            else if (action.listType === 'stress_level') {
                return {
                    ...state,
                    stressLevelList: action.dataList,
                }
            }
            else if (action.listType === 'activity') {
                return {
                    ...state,
                    activityList: action.dataList,
                }
            }
        default:
            return state;
    }
}