import React from 'react'
import styled from 'styled-components'

import Header from '../header/header'

import ProjectContainer from '../projectContent/projectContainer'

const GlobalContainer = styled.div`
    width: 100%;
    transition: 300ms ease-in-out;
`


const Project = () => {

    return(
        <GlobalContainer>
            <Header />
            <ProjectContainer />
        </GlobalContainer>
    )
}

export default Project