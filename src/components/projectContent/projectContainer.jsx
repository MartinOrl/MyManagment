import React from 'react'

import { GlobalContainer } from './projectContainerStyles'

import TasksContainer from '../tasksContainer/tasksContainer'

const ProjectContainer = () => (
    <GlobalContainer>
        <TasksContainer />
    </GlobalContainer>
)

export default ProjectContainer;