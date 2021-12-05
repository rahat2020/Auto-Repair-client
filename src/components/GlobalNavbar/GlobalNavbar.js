import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './GlobalNavbar.module.css';

export default function GlobalNavbar() {
    return (
        <section className="mb-5">
            <nav id={style.navbar} class="navbar navbar-expand-lg fixed-top  navbar-light navbar-inverse">
                <div class="container-fluid">
                    <Link to="/"> <span className={style.logo}>Auto</span><span className={style.logoTwo}>Repair</span> </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span class="navbar-toggler-icon"></span> */}
                        <FontAwesomeIcon className={style.arrow} icon={faBars} />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto text-center">
                            <li class="nav-item">
                                <Link class="nav-link fw-bold" id={style.item} aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link fw-bold" id={style.item}   to="/dashboard/welcome">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link fw-bold"  id={style.item}  to="/allServices">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link fw-bold"  id={style.item}  to="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link fw-bold"  id={style.item}  to="/blogs">Blogs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link fw-bold"  id={style.item}   to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link fw-bold" id={style.item}   to="/contacts">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link fw-bold"  id={style.item}  to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}
