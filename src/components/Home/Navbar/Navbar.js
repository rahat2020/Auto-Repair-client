import React from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.css';
import sliderFour from '../../../img/sliderFour.jpg';
import sliderFive from '../../../img/sliderFive.jpg';
import sliderTwo from '../../../img/sliderTwo.jpg';
import sliderThree from '../../../img/sliderThree.jpg';
const Navbar = () => {
    return (
        <div className={style.navContainer}>
            <nav id={style.navbar} class="navbar navbar-expand-lg fixed-top  navbar-light navbar-inverse">
                <div class="container-fluid">
                    <Link to="/"> <span className={style.logo}>Auto</span><span className={style.logoTwo}>Repair</span> </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto text-center">
                            <li class="nav-item">
                                <Link class="nav-link text-warning fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-primary fw-bold" to="/features">Features</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-primary fw-bold" to="/services">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-primary fw-bold" to="/blogs">Blogs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-primary fw-bold" to="/reviews">Reviews</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-primary fw-bold" to="/login">login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-primary fw-bold" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* carousel */}
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div id={style.img} class="carousel-inner">
                    <div class="carousel-item active">
                        <img  src={sliderFour} class={style.banner}alt="..." />
                        <div class="carousel-caption">
                            <h2 class={style.slideTitle}>We Are <span>Creative</span></h2>
                            <h3 class={style.slideText}>Web Design and Development Agency</h3>
                            <Link to="/">  <button class={style.slideContact}>Contact Now</button> </Link>
                            <Link to="/">  <button class={style.slideContact}>Book Now</button> </Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img  src={sliderFive} class={style.banner} alt="..." />
                        <div class="carousel-caption">
                            <h2 class={style.slideTitle}>We Are <span>Creative</span></h2>
                            <h3 class={style.slideText}>Web Design and Development Agency</h3>
                            <Link to="/">  <button class={style.slideContact}>Contact Now</button> </Link>
                            <Link to="/">  <button class={style.slideContact}>Book Now</button> </Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img  src={sliderThree} class={style.banner} alt="..." />
                        <div class="carousel-caption">
                            <h2 class={style.slideTitle}>We Are <span>Creative</span></h2>
                            <h3 class={style.slideText}>Web Design and Development Agency</h3>
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