import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Teacher from './components/teacherCom/teacher';
import Landing from './components/landing/landing';
import Student from './components/studentCom/students';

//Redux
// import {Provider} from 'react-redux'
// import store from './store'

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/sign-in' component={Login} />
          <Route path='/sign-up' component={Signup} />
          <Route path='/teacher' component={Teacher} />
          <Route path='/student' component={Student} />
        </Switch>
      </div>
    </Router>
    // </Provider>
  );
}

export default App;
