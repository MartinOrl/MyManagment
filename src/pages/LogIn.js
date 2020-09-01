import React from 'react'
import { SetCurrentUser } from '../redux/userReducer/userActions'
import { connect } from 'react-redux'

const PageStyle = {
    textAlign: 'center',
    background: '#1e1f26',
    width: '100vvw',
    height: '100vh',
    color: 'whitesmoke',
    padding: '80px 40px'

}


const LogIn = ({ logIn }) => {
    const handleLogIn = () => {
        let user = {
            id: 1234,
            name: 'Lol'
        }
        logIn(user)
    }

    return(
        <div style={PageStyle}>
            <p onClick={handleLogIn} style={{margin: 0}} >Log In</p>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    logIn: user => dispatch(SetCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(LogIn)