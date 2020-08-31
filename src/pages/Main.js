import React from 'react'
import styled from 'styled-components'

import Project from '../components/project/project'
import Sidebar from '../components/sidebar/sidebar'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`

const Main = () => {
    return(
        <Container>
            <Sidebar />
            <Project />
        </Container>
    )
}

export default Main;