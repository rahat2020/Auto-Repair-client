import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../../../Context/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (      // checking user already loggedIn or not
                    children
                ) : (
                    <Redirect                   // Redirect to login page
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;