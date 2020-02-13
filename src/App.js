import React from 'react';
import Body from './components/Body';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
    <NavBar/>
    <Switch>
    <Route exact path='/' component={Body} />
    </Switch>
    </div>
  );
}

export default App;
