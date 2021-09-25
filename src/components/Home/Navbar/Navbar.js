import React from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.css';
import sliderFour from '../../../img/sliderFour.jpg';
import sliderFive from '../../../img/sliderFive.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons';
import sliderThree from '../../../img/sliderThree.jpg';
import Typical from 'react-typical'
const Navbar = () => {
    return (
        <div className={style.navContainer}>
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
                                <Link class="nav-link active text-warning fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-warning fw-bold" to="/dashboard">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-warning fw-bold" to="/services">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-warning fw-bold" to="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-warning fw-bold" to="/blogs">Blogs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-warning fw-bold" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-warning fw-bold" to="/contacts">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-warning fw-bold" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* carousel */}
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div id={style.img} class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={sliderFour} class={style.banner} alt="..." />
                        <div class="carousel-caption">
                            <h2 class={style.slideTitle}>We {" "}
                            <Typical
                                class={style.Typical}
                                    loop={Infinity}
                                    speed={300}
                                    wrapper="b"
                                    steps={['Are Professional', 5000, 'are dedicated to work', 5000]}
                                   
                                />
                           
                            
                            </h2>
                            <h3 class={style.slideText}>
                                We {" "}
                                <Typical
                                class={style.Typical}
                                    loop={Infinity}
                                    speed={400}
                                    wrapper="b"
                                    steps={['will modify your car as you want', 5000, 'will fix your car problem', 5000]}
                                />
                             
                            </h3>
                            <Link to="/">  <button class={style.slideContact}>Contact Now</button> </Link>
                            <Link to="/">  <button class={style.slideContact}>Book Now</button> </Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={sliderFive} class={style.banner} alt="..." />
                        <div class="carousel-caption">
                            <h2 class={style.slideTitle}>We {" "}
                            <Typical
                                class={style.Typical}
                                    loop={Infinity}
                                    speed={600}
                                    wrapper="b"
                                    steps={['Are Creative', 5000, 'will make you happy', 5000]}
                                />
                            </h2>
                            <h3 class={style.slideText}>We will fix your car as you bought dammn new</h3>
                            <Link to="/">  <button class={style.slideContact}>Contact Now</button> </Link>
                            <Link to="/">  <button class={style.slideContact}>Book Now</button> </Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={sliderThree} class={style.banner} alt="..." />
                        <div class="carousel-caption">
                            <h2 class={style.slideTitle}>We care about<span> your car as you do</span></h2>
                            <h3 class={style.slideText}>We are always dedicated to our client statisfactions</h3>
                            <Link to="/">  <button class={style.slideContact}>Contact Now</button> </Link>
                            <Link to="/">  <button class={style.slideContact}>Book Now</button> </Link>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;