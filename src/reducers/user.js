const initialState = {
    'username': '',
    'accessToken': '',
    'refreshToken': '',
}


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_INFO':
            return {
                ...state,
                username: action.username,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken,
            }
        default:
            return state
    }
}