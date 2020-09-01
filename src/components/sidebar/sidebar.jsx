import React from 'react'

import { SidebarContainer, Title, Separator } from './sidebarStyles'

import SidebarItem from '../sidebarItem/sidebarItem'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { SelectSidebarDisplay } from '../../redux/displayReducer/displaySelectors'
import { SelectProjects } from '../../redux/projectReducer/projectSelectors'
import { SetCurrentProject } from '../../redux/projectReducer/projectActions'


const Sidebar = ({display, projects}) => {

    return(
        <SidebarContainer display={display} >
            <Title>Projects</Title>
            <Separator />
            {
                projects.map(project => <SidebarItem text={project} />)
            }
        </SidebarContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    display: SelectSidebarDisplay,
    projects: SelectProjects
})

const mapDispatchToProps = dispatch => ({
    setProject: project => dispatch(SetCurrentProject(project))
})

export default  connect(mapStateToProps, mapDispatchToProps)(Sidebar)