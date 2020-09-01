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
        case ProjectActionTypes.REMOVE_TASK:
            let newTasks;
            state.projects.map(project => {
                if(project.id === state.currentProject.id){
                    newTasks = project.tasks
                    newTasks.splice(newTasks.indexOf(action.payload, 1))
                }
                return null
            })
            let projects = [];
            state.projects.map(project => {
                if(project.id === state.currentProject.id){
                    project.tasks = newTasks
                }
                projects.push(project)
                return null
            })

            return {
                ...state,
                currentProject: {
                    ...state.currentProject,
                    tasks: [...newTasks]
                },
                projects: [
                    ...projects
                ]
            }
        
        default:
            return state
    }
}

export default ProjectReducer