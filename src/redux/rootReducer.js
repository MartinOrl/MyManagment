import { combineReducers } from 'redux'

import UserReducer from './userReducer/userReducer'
import ProjectReducer from './projectReducer/projectReducer'
import DisplayReducer from './displayReducer/displayReducer'

const rootReducer = combineReducers({
    user: UserReducer,
    projects: ProjectReducer,
    display: DisplayReducer
})


export default rootReducer