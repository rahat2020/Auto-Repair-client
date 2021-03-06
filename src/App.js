import './App.css';
import { createContext,useEffect,useState } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Contact from './components/Home/Contact/Contact';
import Aboutus from './components/Aboutus/Aboutus';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import AllServices from './components/AllServices/AllServices';
import NoMatch from './components/NoMatch/NoMatch';
import Payment from './components/Payment/Payment';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import WelcomePage from './components/Dashboard/WelcomePage/WelcomePage';
import ServiceDetails from './components/ServaiceDetails/ServiceDetails';
import Products from './components/Home/Products/Products';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [total, setTotal] = useState([]);

  //adding user to the session storage
  useEffect(() => {
    const USER = JSON.parse(sessionStorage.getItem('user'));
    if (USER) {
      setLoggedInUser(USER)
    }
    console.log(USER)
  }, [loggedInUser.role])

  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="root">
     <UserContext.Provider value={[loggedInUser, setLoggedInUser, total, setTotal]}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/contacts">
                <Contact />
              </Route>
              <Route path="/welcome">
                <WelcomePage/>
              </Route>
              <Route path="/about">
                <Aboutus />
              </Route>
              <PrivateRoute path="/payment">
                < Payment/>
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/dashboard/welcome">
                <WelcomePage />
              </PrivateRoute>
              <Route path="/allServices">
                <AllServices />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/details/:_id">
                <ServiceDetails/>
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </UserContext.Provider>
    </div>
  );
}

export default App;
