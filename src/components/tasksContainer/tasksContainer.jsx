import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { GlobalContainer, Title } from './tasksContainerStyles'

import Task from '../task/task'

import { SelectCurrentProjectTasks } from '../../redux/projectReducer/projectSelectors'


const TasksContainer = ({tasks}) => {

    return(
        <GlobalContainer>
            <Title>Tasks</Title>
            {
                tasks ? tasks.map(task => <Task text={task} />) : null
            }
        </GlobalContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    tasks: SelectCurrentProjectTasks
})

export default connect(mapStateToProps)(TasksContainer);