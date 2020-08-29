import { ProjectActionTypes } from './projectActions'

const INITIAL = {
    projects: [],
    currentProject: ''
}

const ProjectReducer = (state = INITIAL, action ) => {
    switch(action.type){
        case ProjectActionTypes.ADD_PROJECT:
            if(Array.isArray(action.payload)){
                return {
                    ...state,
                    projects: [...state.projects, ...action.payload]
                }
            }
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        case ProjectActionTypes.SET_CURRENT_PROJECT:
            return {
                ...state,
                currentProject: action.payload
            }
        default:
            return state
    }
}

export default ProjectReducer