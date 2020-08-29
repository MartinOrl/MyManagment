import { UserActionTypes } from './userActions'

const UserReducer = (state = {currentUser: ''}, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.LOG_OUT:
            return {
                ...state,
                currentUser: null
            }
        default:
            return state
    }

}


export default UserReducer