import React from 'react'
import { Switch,Route, useRouteMatch} from "react-router-dom";
import AddReview from '../AddReview/AddReview';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
export default function RouteDiv() {
    let { path } = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route  path={`${path}/addReview`}>
                    <AddReview/>
                </Route>
                <Route path={`${path}/addAdmin`}>
                    <AddAdmin/>
                </Route>
                <Route exact path={`${path}/addService`}>
                    <AddService/>
                </Route>
            </Switch>
        </div>
    )
}
