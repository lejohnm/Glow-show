import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Home from "./Pages/Home";
import Venues from './Pages/venues';
import Contact from './Pages/contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Route exact path= '/' component= {Home} />
      <Route exact path='/venues' component= {Venues} />
      <Route exact path= '/contact' component= {Contact} />
    </Router>
  );
}

export default App;
