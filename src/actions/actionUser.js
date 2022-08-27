export const setUserInfo = (username, accessToken, refreshToken) => ({
    type: 'SET_USER_INFO',
    username,
    accessToken,
    refreshToken,
})