import {useContext, React} from 'react';
import userContext from '../../../App';
import {Route, Redirect} from "react-router-dom";

export default function PrivateRoute({children, ...rest}) {

    const loggedInUser = useContext(userContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
        loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    )
}
