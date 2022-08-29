const initialState = {
    locationList: ['Dublin City University',
        'Home',
    ],
    stressLevelList: ['Relaxed', 'Low Stress', 'Medium Stress', 'High Stress'],
    activityList: ['Sitting', 'Walking', 'Running', 'Standing', 'Cycling', 'Driving', 'Riding', 'Hiking', 'Swimming', 'Biking', 'Other'],
}


export const annotationListDataReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}