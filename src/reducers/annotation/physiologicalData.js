const initialState = {
    heartRate: {
        min: 70,
        max: 100,
        mean: 80,
        std: 1.25,
    },
    bvp: {
        min: 70,
        max: 100,
        mean: 80,
        std: 1.25,
    },
    eda: {
        min: 70,
        max: 100,
        mean: 80,
        std: 1.25,
    },
    temp: {
        min: 70,
        max: 100,
        mean: 80,
        std: 1.25,
    },
}


export const physiologicalDataReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}