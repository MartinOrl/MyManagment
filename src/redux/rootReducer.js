import { combineReducers } from 'redux'

import UserReducer from './userReducer/userReducer'
import ProjectReducer from './projectReducer/projectReducer'

const rootReducer = combineReducers({
    user: UserReducer,
    projects: ProjectReducer
})


export default rootReducer