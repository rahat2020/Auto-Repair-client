import React, { useContext } from 'react'
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddReview from '../AddReview/AddReview';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import ManageServices from '../ManageServices/ManageServices';
import WelcomePage from '../WelcomePage/WelcomePage';
import AddProducts from '../AddProducts/AddProducts';
import Order from '../Order/Order';
import AllOrders from '../AllOrders/AllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import { AuthContext } from '../../../Context/AuthContext';
import Home from '../../Home/Home/Home';
export default function RouteDiv() {
    let { path } = useRouteMatch();
    const { decodedTkn } = useContext(AuthContext);
    return (
        <div>
            <Switch>
                <Route exact path={`${path}/welcome`}>
                    <WelcomePage />
                </Route>
                <Route path={`${path}/addReview`}>
                    <AddReview />
                </Route>
                <Route path={`${path}/addAdmin`}>
                    {
                        decodedTkn.isAdmin === true ?
                            <AddAdmin />
                            :
                            <Home />
                    }
                </Route>
                <Route path={`${path}/manage`}>
                    {
                        decodedTkn.isAdmin === true ?
                            <ManageServices />
                            :
                            <Home />
                    }
                </Route>
                <Route path={`${path}/manageproducts`}>
                    {
                        decodedTkn.isAdmin === true ?
                            <ManageProducts />
                            :
                            <Home />
                    }

                </Route>
                <Route path={`${path}/allorders`}>
                    {
                        decodedTkn.isAdmin === true ?
                            <AllOrders />
                            :
                            <Home />
                    }

                </Route>
                <Route path={`${path}/addService`}>
                    {
                        decodedTkn.isAdmin === true ?
                            <AddService />
                            :
                            <Home />
                    }
                </Route>
                <Route path={`${path}/addProducts`}>
                    {
                        decodedTkn.isAdmin === true ?
                            <AddProducts />
                            :
                            <Home />
                    }
                </Route>
                <Route path={`${path}/ordered`}>
                    <Order />
                </Route>
            </Switch>
        </div>
    )
}
