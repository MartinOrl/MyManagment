import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentUser } from './redux/userReducer/userSelectors';
import { SetCurrentUser, LogOut } from './redux/userReducer/userActions';

import Main from './pages/Main'
import { AddProject } from './redux/projectReducer/projectActions';


import { TestProjects } from './testSuite'

const App = ({logIn, user, addTestProjects}) => {
  const handleLogin = () => {
    let user = {
      id: 32458,
      userName:'Lmao'
    }
    logIn(user)
  }

  useEffect(() => {
    addTestProjects(TestProjects)
  }, [])

  return (
    <div className="App">
      {
        user ? <Main/> : <p onClick={handleLogin} >Log In</p>
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
  addTestProjects: project => dispatch(AddProject(project))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
