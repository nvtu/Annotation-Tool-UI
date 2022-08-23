const initialState = {
    location: ['Dublin City University',
        'Home',
    ],
    stress: ['Relaxed', 'Low Stress', 'Medium Stress', 'High Stress'],
    activity: ['Sitting', 'Walking', 'Running', 'Standing', 'Cycling', 'Driving', 'Riding', 'Hiking', 'Swimming', 'Biking', 'Other'],
}


export const annotationListDataReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}