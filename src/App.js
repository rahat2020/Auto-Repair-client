import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Contact from './components/Home/Contact/Contact';
import Aboutus from './components/Aboutus/Aboutus';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import AllServices from './components/AllServices/AllServices';
import NoMatch from './components/NoMatch/NoMatch';
// import loader from './img/loader.gif';
function App() {


  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 8000)
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 8000);
    return () => clearTimeout(timer);
  }, []);
  // const gifStyle = {
  //   width: "100vw",
  //   height: "100vh"
  // }
  return (
    <div className="root">
      {
        loading ?
          <ClimbingBoxLoader
            color={"#EDBB00"}
            loading={loading}
            size={10}
          />
          :
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/contacts">
                <Contact />
              </Route>
              <Route path="/about">
                <Aboutus />
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/allServices">
                <AllServices/>
              </Route>
              <Route path="*">
                <NoMatch/>
              </Route>
            </Switch>
          </Router>
      }
    </div>
  );
}

export default App;
