import React, { useContext } from 'react';
import './Menu.scss';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Menu = ({isOpen, setOpen}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

const handleLogout = () => {
    // sessionStorage.removeItem('user');
    // setLoggedInUser({})
    console.log(setLoggedInUser)
}


    let { url } = useRouteMatch();
    return (
        <div className={"menu " + (isOpen && "active")} id="menu">
            <ul>
                <li onClick={()=> setOpen(false)}>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={()=> setOpen(false)}>
                    <Link exact to={`${url}/addService`}>Add Services</Link>
                </li>
                <li onClick={()=> setOpen(false)}>
                    <Link to={`${url}/addProducts`}>Add Products</Link>
                </li>
                <li onClick={()=> setOpen(false)}>
                    <Link to={`${url}/addAdmin`}>Add Admin</Link>
                </li>
                <li onClick={()=> setOpen(false)}>
                    <Link to={`${url}/manage`}>Manage services</Link>
                </li>
                <li onClick={()=> setOpen(false)}>
                    <Link to={`${url}/addReview`}>Add Reviews</Link>
                </li>
                <li onClick={()=> setOpen(false)}>
                    <Link to={`${url}/addService`}>Order list</Link>
                </li>
                <li onClick={()=> setOpen(false)}>
                    <Link>{loggedInUser? loggedInUser.name : "why r u here?"}</Link>
                </li>
                <li onClick={()=> setOpen(false)}>
                    <Link onClick={handleLogout}>Log out</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;