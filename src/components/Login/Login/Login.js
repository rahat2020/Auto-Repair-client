import React from 'react';
import style from './Login.module.css';
import loginSvgTwo from '../../../img/loginSvgTwo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <section className="">
             <nav id={style.navbar} class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon className={style.arrow} icon={faBars} />
                    </button>
                    <div class="collapse navbar-collapse justify-content-center text-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link id={style.navItem} class="nav-link text-white fw-bolder " aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link id={style.navItem} class="nav-link text-white fw-bold" aria-current="page" to="/">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link id={style.navItem} class="nav-link text-white fw-bold" aria-current="page" to="/">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link id={style.navItem} class="nav-link text-white fw-bold" aria-current="page" to="/">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="container mt-3 pt-3">
            <div className="row mb-5 py-4" id={style.FormBox}>
                <div className="col-md-6">
                    <div className={style.colLeft}>
                        <img className={style.LoginImg} src={loginSvgTwo} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="registration">
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="inputName4" class="form-label">Name</label>
                                <input type="name" name="name" class="form-control" id="inputName4"/>
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" name="email" class="form-control" id="inputEmail4"/>
                            </div>
                            <div class="col-12">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" name="password" class="form-control" id="inputPassword4"/>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </section>
           
        </section>
    )
}
