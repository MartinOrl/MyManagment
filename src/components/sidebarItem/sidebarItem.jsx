import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { SetCurrentProject } from '../../redux/projectReducer/projectActions'

const ItemContainer = styled.div`
    padding: 8px 0;
    transition: 300ms ease-in-out;
    &:hover{
        background: #d0e1f9;
        cursor: pointer;
    }
`

const ItemTItle = styled.h1`
    font-size: 1.2rem;
`

const SidebarItem = ({text, setProject}) => (
    <ItemContainer>
        <ItemTItle onClick={()=> setProject(text)} >{text}</ItemTItle>
    </ItemContainer>
)

const mapDispatchToProps = dispatch => ({
    setProject: project => dispatch(SetCurrentProject(project))
})

export default connect(null, mapDispatchToProps)(SidebarItem)