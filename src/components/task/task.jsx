import React from 'react'

import {TaskContainer, CompleteContainer, Complete, Tick, TaskInfo, DeleteTask} from './taskStyles'
import { RemoveTask } from '../../redux/projectReducer/projectActions'
import { connect } from 'react-redux'

const Task = ({text, remove}) => {

    return(
        <TaskContainer>
            <CompleteContainer>
                <Complete type="checkbox" />
                <Tick />
            </CompleteContainer>
            <TaskInfo>{text}</TaskInfo>
            <DeleteTask onClick={() => remove(text)} >X</DeleteTask>
        </TaskContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    remove: text => dispatch(RemoveTask(text))
})

export default connect(null, mapDispatchToProps)(Task)