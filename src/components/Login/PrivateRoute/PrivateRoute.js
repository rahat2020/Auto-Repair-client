// import {useContext, React} from 'react';
// import userContext from '../../../App';
// import {Route, Redirect} from "react-router-dom";

// export default function PrivateRoute({children, ...rest}) {

//     const loggedInUser = useContext(userContext)
//     return (
//         <Route
//         {...rest}
//         render={({ location }) =>
//         loggedInUser.email ? (
//             children
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: location }
//               }}
//             />
//           )
//         }
//       />
//     )
// }

import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (      // checking user already loggedIn or not
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