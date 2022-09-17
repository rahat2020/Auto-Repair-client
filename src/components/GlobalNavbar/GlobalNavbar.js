import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import style from './GlobalNavbar.module.css';

export default function GlobalNavbar() {
    const { user, dispatch } = useContext(AuthContext);
    const handlelogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (
        <section className="mb-5">
            <nav id={style.navbar} className="navbar navbar-expand-lg fixed-top  navbar-light navbar-inverse">
                <div className="container-fluid">
                    <Link to="/"> <span className={style.logo}>Auto</span><span className={style.logoTwo}>Repair</span> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <FontAwesomeIcon className={style.arrow} icon={faBars} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" id={style.item} aria-current="page" to="/">Home</Link>
                            </li>

                            {
                                user ?
                                    <li className="nav-item">
                                        <Link className="nav-link fw-bold" id={style.item} to="/dashboard/welcome">Dashboard</Link>
                                    </li>
                                    :
                                    " "
                            }
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" id={style.item} to="/allServices">Services</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" id={style.item} href="#Products">Products</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" id={style.item} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" id={style.item} to="/contacts">Contact</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    user ?
                                        <button
                                            className="nav-link fw-bold"
                                            onClick={handlelogout}
                                            id={style.item}
                                            style={{ border: "none", backgroundColor: "#00000000" }}
                                        >
                                            Logout</button>
                                        :
                                        <Link className="nav-link fw-bold" id={style.item} to="/login">Login</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}
