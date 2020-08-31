import React from 'react'
import styled from 'styled-components'

import Header from '../header/header'

const ProjectContainer = styled.div`
    width: 100%;
    transition: 300ms ease-in-out;
`


const Project = () => {

    return(
        <ProjectContainer>
            <Header />
        </ProjectContainer>
    )
}

export default Project