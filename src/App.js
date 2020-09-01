import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentUser } from './redux/userReducer/userSelectors';

import Main from './pages/Main'
import { AddProject, SetCurrentProject } from './redux/projectReducer/projectActions';


import { TestProjects } from './testSuite'

import LogIn from './pages/LogIn'

class App extends React.Component {
  componentDidMount(){
    const { addTestProjects, setDefaultProject} = this.props
    addTestProjects(TestProjects)
    setDefaultProject(TestProjects[0])

  }
  render(){
    return (
      <div className="App">
        {
          this.props.user ? <Main/> : <LogIn />
        }
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  user: SelectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  addTestProjects: project => dispatch(AddProject(project)),
  setDefaultProject: project => dispatch(SetCurrentProject(project))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
