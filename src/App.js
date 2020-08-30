import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentUser } from './redux/userReducer/userSelectors';
import { SetCurrentUser, LogOut } from './redux/userReducer/userActions';

import Header from './components/header/header'

const App = ({logIn, logOut, user}) => {
  const handleLogin = () => {
    let user = {
      id: 32458,
      userName:'Lmao'
    }
    logIn(user)
  }
  const handleLogOut = () => {
    logOut()
  }



  return (
    <div className="App">
      {
        user ? <Header/> : <p onClick={handleLogin} >Log In</p>
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: SelectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(SetCurrentUser(user)),
  logOut: () => dispatch(LogOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
