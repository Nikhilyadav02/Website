import React from 'react'
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import CompOne from './components/pages/CompOne'
import CompTwo from './components/pages/CompTwo'

import './App.css';

function App() {
  return (
    <div className="body-wrap">
      <Router>
        <Layout>
          <Switch>
            <Route path={'/AboutUs'} component={AboutUs}></Route>
            <Route path={'/CompOne'} component={CompOne}></Route>
            <Route path={'/CompTwo'} component={CompTwo}></Route>
            <Route path={'/ContactUs'} component={ContactUs}></Route>
            <Route path={'/'} component={Home}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
