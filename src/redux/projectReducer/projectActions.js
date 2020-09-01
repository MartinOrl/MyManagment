export const ProjectActionTypes = {
    ADD_PROJECT: 'ADD_PROJECT',
    REMOVE_TASK: 'REMOVE_TASK',
    SET_CURRENT_PROJECT: 'SET_CURRENT_PROJECT'
}

export const AddProject = project => ({
    type: ProjectActionTypes.ADD_PROJECT,
    payload: project
})

export const SetCurrentProject = project => ({
    type: ProjectActionTypes.SET_CURRENT_PROJECT,
    payload: project
})

export const RemoveTask = task => ({
    type: ProjectActionTypes.REMOVE_TASK,
    payload: task
})