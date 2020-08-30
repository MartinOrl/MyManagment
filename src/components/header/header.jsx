import React, { useState } from 'react'
import { connect } from 'react-redux'
import { LogOut } from '../../redux/userReducer/userActions'

import { HeaderContainer, Title, User, UserOptions, OptionsToggle, Option } from './headerStyles'

const Header = ({logOut}) => {
    const [display, setDisplay] = useState(false)

    return(
        <HeaderContainer>
            <Title>Lmao</Title>
            <User>
                <OptionsToggle onClick={() => setDisplay(!display)} >Toggle</OptionsToggle>
                <UserOptions display={display} >
                    <Option>Test</Option>
                    <Option onClick={logOut} >Log Out</Option>
                </UserOptions>
            </User>
        </HeaderContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(LogOut())
})


export default connect(null, mapDispatchToProps)(Header)