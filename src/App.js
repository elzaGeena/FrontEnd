import React from 'react'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { Report, ReportOne, ReportTwo, ReportThree } from './pages/Report';


import Team from './pages/Team';



const App = () => {
  return (
    <Router>
      <Sidebar  />
    
      <Switch>
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/report' exact component={Report} />
        <Route path='/report/report1' exact component={ReportOne} />
        <Route path='/report/report2' exact component={ReportTwo} />
  <Route path='/report/report3' exact component={ReportThree} />
       <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;