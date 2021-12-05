import React from 'react'
import { Switch,Route, useRouteMatch} from "react-router-dom";
import AddReview from '../AddReview/AddReview';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import ManageServices from '../ManageServices/ManageServices';
import WelcomePage from '../WelcomePage/WelcomePage';
import AddProducts from '../AddProducts/AddProducts';
export default function RouteDiv() {
    let { path } = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route exact path={`${path}/welcome`}>
                    <WelcomePage/>
                </Route>
                <Route  path={`${path}/addReview`}>
                    <AddReview/>
                </Route>
                <Route path={`${path}/addAdmin`}>
                    <AddAdmin/>
                </Route>
                <Route  path={`${path}/manage`}>
                    <ManageServices/>
                </Route>
                <Route  path={`${path}/addService`}>
                    <AddService/>
                </Route>
                <Route path={`${path}/addProducts`}>
                    <AddProducts/>
                </Route>
                <Route path={`${path}/addService`}>
                    <AddService/>
                </Route>
            </Switch>
        </div>
    )
}
