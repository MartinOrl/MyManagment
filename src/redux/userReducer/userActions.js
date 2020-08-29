export const UserActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    LOG_OUT: 'LOG_OUT'
}

export const SetCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const LogOut = () => ({
    type: UserActionTypes.LOG_OUT
})