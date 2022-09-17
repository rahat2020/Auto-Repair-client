import React, { useContext } from 'react';
import './Menu.scss';
import { useRouteMatch } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext';

const Menu = ({ isOpen, setOpen }) => {
    const { dispatch, user, decodedTkn } = useContext(AuthContext);
    // console.log(decodedTkn)
    const history = useHistory()
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
        history.push('/login')
    }


    let { url } = useRouteMatch();
    return (
        <div className={"menu " + (isOpen && "active")} id="menu">
            <ul>
                <li onClick={() => setOpen(false)}>
                    <Link to="/">Home</Link>
                </li>
                {
                    decodedTkn.isAdmin === true ?
                        <>
                            <li onClick={() => setOpen(false)}>
                                <Link to={`${url}/addService`}>Add Services</Link>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                <Link to={`${url}/addProducts`}>Add Products</Link>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                <Link to={`${url}/addAdmin`}>Add Admin</Link>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                <Link to={`${url}/manage`}>Manage services</Link>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                <Link to={`${url}/manageproducts`}>Manage products</Link>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                <Link to={`${url}/allorders`}>All Orders</Link>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                <Link to={`${url}/user`}> <span className="nav__log">{user ? user.username : null}</span> </Link>

                            </li>
                            <li onClick={() => setOpen(false)}>
                                <span
                                    className="nav_log"
                                    onClick={handleLogout}

                                >Log out</span>
                            </li>
                        </>

                        :
                        <>
                            <li onClick={() => setOpen(false)}>
                                <Link to={`${url}/addReview`}>Add Reviews</Link>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                <Link to={`${url}/ordered`}>Order list</Link>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                <Link to={`${url}/user`}> <span className="nav__log">{user ? user.username : null}</span> </Link>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                <span
                                    className="nav_log"
                                    onClick={handleLogout}
                                >Log out</span>
                            </li>
                        </>
                }
            </ul>
        </div>
    );
};

export default Menu;