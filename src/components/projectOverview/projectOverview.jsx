import React from 'react'

import { ProjectInfoContainer, Title, Description } from './projectOverviewStyles'
import { SelectCurrentProject } from '../../redux/projectReducer/projectSelectors'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const ProjectOverview = ({project}) => {

    return(
        <ProjectInfoContainer>
            <Title>{project}</Title>
            <Description>An AI Type of an Assistant</Description>
        </ProjectInfoContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    project: SelectCurrentProject
})

export default connect(mapStateToProps)(ProjectOverview)