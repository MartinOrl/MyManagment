import React, { useState } from 'react'
import { connect } from 'react-redux'
import { LogOut } from '../../redux/userReducer/userActions'

import { HeaderContainer, User, UserOptions, OptionsToggle, Option, SidebarToggle, ToggleText } from './headerStyles'

import ProjectOverview from '../projectOverview/projectOverview'
import { setSidebarDisplay } from '../../redux/displayReducer/displayActions'
import { SelectSidebarDisplay } from '../../redux/displayReducer/displaySelectors'
import { createStructuredSelector } from 'reselect'

const Header = ({logOut, setSidebarDisplay, sidebarDisplay}) => {
    const [display, setDisplay] = useState(false)
    return(
        <HeaderContainer>
            <SidebarToggle onClick={setSidebarDisplay} active={sidebarDisplay} ><ToggleText>&gt;</ToggleText></SidebarToggle>
            <ProjectOverview />
            <User>
                <OptionsToggle onClick={() => setDisplay(!display)} >Options</OptionsToggle>
                <UserOptions display={display} >
                    <Option>Test</Option>
                    <Option onClick={logOut} >Log Out</Option>
                </UserOptions>
            </User>
        </HeaderContainer>
    )
}
const mapStateToProps = createStructuredSelector({
    sidebarDisplay: SelectSidebarDisplay
})

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(LogOut()),
    setSidebarDisplay: () => dispatch(setSidebarDisplay())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)