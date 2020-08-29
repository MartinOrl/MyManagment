export const ProjectActionTypes = {
    ADD_PROJECT: 'ADD_PROJECT',
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