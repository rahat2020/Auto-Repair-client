import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faClock, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import style from './Contact.module.css';
const Contact = () => {
    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000 });
    })
    return (
        <section className="">
            <nav id={style.navbar} class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon className={style.arrow} icon={faBars} />
                    </button>
                    <div class="collapse navbar-collapse justify-content-center text-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link id={style.navItem} class="nav-link text-primary fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link id={style.navItem} class="nav-link text-primary fw-bold" aria-current="page" to="/">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link id={style.navItem} class="nav-link text-primary fw-bold" aria-current="page" to="/">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link id={style.navItem} class="nav-link text-primary fw-bold" aria-current="page" to="/">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="col-md-10 map w-100">
                <iframe className={style.googleMap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236206.47791826713!2d91.67977898204921!3d22.32619178518328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1632335787250!5m2!1sen!2sbd" alt="map"></iframe>
            </div>
            <section className={style.ContactBar}>
                <div className={style.contactTilte}>
                    <span data-aos="fade-up" className={style.lineOne}></span>
                    <h2 data-aos="fade-up">We are based in Chattogram, BD</h2>
                    <span data-aos="fade-up" className={style.lineOne}></span>
                </div>
                <div id={style.schedule} className="container w-100 mt-3 mb-5">
                    <div className="row">
                        <div data-aos="fade-up" className="col-md-4">
                            <div className={style.scheduleText}>
                                <FontAwesomeIcon className={style.arrow} icon={faMapMarkerAlt} />
                                <div className={style.para}>
                                    <p>Chattogram, Khulshi</p>
                                    <p>Firs Avenue, Muswell Hill,</p>
                                    <p>
                                        <Link to="/">more➝</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="col-md-4">
                            <div className={style.scheduleText}>
                                <FontAwesomeIcon className={style.arrow} icon={faPhoneAlt} />
                                <div className={style.para}>
                                    <p>Tel: 281-290-4755</p>
                                    <p>Fax: 281-290-4755</p>
                                    <p>Email: autoRepair@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="col-md-4">
                            <div className={style.scheduleText}>
                                <FontAwesomeIcon className={style.arrow} icon={faClock} />
                                <div className={style.para}>
                                    <p>Week Days: 05:00 – 22:00</p>
                                    <p>Saturday: 08:00 – 18:00</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-4 pt-4">
                        <div data-aos="zoom-in-up" className={style.socialIcon}>
                            <FontAwesomeIcon id={style.facebookBg} className={style.icon} icon={faFacebookSquare} />
                            <FontAwesomeIcon id={style.faInstagramSquare} className={style.icon} icon={faInstagramSquare} />
                            <FontAwesomeIcon id={style.faYoutubeSquare} className={style.icon} icon={faYoutubeSquare} />
                            <FontAwesomeIcon id={style.faTwitterSquare} className={style.icon} icon={faTwitterSquare} />
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className="container" id={style.form}>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <input type="email" class="form-control" placeholder="Email" />
                        </div>
                        <div class="col-md-6">
                            <input type="password" class="form-control" placeholder="Name" />
                        </div>
                        <div class="col-12">
                            <textarea type="text" rows="5" class="form-control" placeholder="Your message" />
                        </div>
                        <div class="col-12">
                            <Link to="/">  <button class={style.slideContact}>Send message</button></Link>
                        </div>
                    </form>
                </div>

            </section>
        </section>
    );
};


export default Contact;