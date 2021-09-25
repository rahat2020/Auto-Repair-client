import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Contact from './components/Home/Contact/Contact';
import Aboutus from './components/Aboutus/Aboutus';
import Footer from './components/Home/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/contacts">
          <Contact />
        </Route>
        <Route path="/about">
          <Aboutus />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
