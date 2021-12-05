import React from 'react'
import style from './Aboutus.module.css';
import carVideo from '../../img/carVideo.mp4';
import signature from '../../img/signature.png';
import { Link } from 'react-router-dom';
import { faBars, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import auto from '../../img/auto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from '@trendyol-js/react-carousel';
import ReactPlayer from 'react-player';
import aboutOne from '../../img/aboutOne.jpg';
import aboutTwo from '../../img/aboutTwo.jpg';
import aboutThree from '../../img/aboutThree.jpg';
import aboutFive from '../../img/aboutFive.jpg';
import aboutSix from '../../img/aboutSix.jpg';
import Footer from '../Home/Footer/Footer';
export default function Aboutus() {

    
    return (
        <section className="mb-4" id={style.about}>
            <div className="video">
                <video
                    autoPlay
                    loop
                    muted
                    id={style.video}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        left: '50%',
                        top: '50%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'translate(-50%, -50%)',
                        zIndex: "-1"
                    }}

                >
                    <source src={carVideo} type="video/mp4" />
                </video>
            </div>
            <nav id={style.navbar} class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon className={style.arrow} icon={faBars} />
                    </button>
                    <div class="collapse navbar-collapse justify-content-center text-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link id={style.navItem} class="nav-link text-white fw-bolder fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link id={style.navItem} class="nav-link text-white fw-bold fs-5" aria-current="page" to="/allServices">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link id={style.navItem} class="nav-link text-white fw-bold fs-5" aria-current="page" to="/">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link id={style.navItem} class="nav-link text-white fw-bold fs-5" aria-current="page" to="/">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container" id={style.aboutContainer}>
                <div className={style.aboutBox}>
                    <h1 className={style.slideTitle}> We care your car as you do</h1> <br />
                    <h2 class={style.TitleTwo}>We love your car as you do</h2>
                    <div className={style.btn}>
                        <Link to="/contact">
                            <button className={style.btnReadmore}>Contact</button>
                        </Link>
                        <Link to="/service">
                            <button className={style.btnReadmore}>Book</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mt-5 pt-5">
                <div className={style.logo}>
                    <img className={style.aboutLogo} src={auto} alt="" />
                </div>
                <div className={style.qoute}>
                    <h5 className={style.title}>“Every mountain top is within reach if you just keep climbing.”</h5>
                    <span className={style.para}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorperadipiscing elit, sed diam nonummy <br />
                        nibh suscipit lobortis nisl ut aliquip ex ea commodo consequat.</span>
                </div>

                <div className="mt-4 pt-4 mb-3">
                    <div className="row">
                        <div className="col-md-7">
                            <div className={style.colLeft}>
                                <h4 className={style.aboutTitle}>WP Theme for Mechanics!</h4>
                                <p className={style.aboutPara}>Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.
                                    <br />
                                    <br />

                                    Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Mauris non tempor quam, et lacinia sapien. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus.
                                    <br />
                                    <br />
                                    Mauris non tempor quam, et lacinia sapien. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus.</p>
                            </div>
                            <div className="row mt-4 pt-4">
                                <div className="col-md-7">
                                    <div className={style.video}>
                                        <ReactPlayer
                                            controls
                                            width="100%"
                                            height="15rem"
                                            borderRadius="2rem"
                                            url="https://www.youtube.com/watch?v=eWUxqVFBq74" />
                                    </div>
                                </div>
                                <div className="col-md-5 d-flex flex-row-reverse">
                                    <div className="" id={style.founder}>
                                        <h4>Kazi Rahat</h4>
                                        <div className={style.activity}>
                                            <ul>
                                                <li>Over 900 Five Star Reviews</li>
                                                <li>Free Diagnosis & Brake Checks</li>
                                                <li>No Appointment Necessary</li>
                                                <li>Free Loaner Cars or Shuttle</li>
                                            </ul>
                                            <div className={style.img}>
                                                <img src={signature} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="w-100 d-flex flex-row-reverse" id={style.colRight}>
                                <div className={style.wrapper}>
                                    <div className={style.featureIcon}>
                                        <FontAwesomeIcon className={style.icon} icon={faEnvelope} />
                                    </div>
                                    <p className={style.FeatureTitle}>free apointments</p> <hr className={style.hr} />
                                    <div className={style.appointText}>
                                        <p>Free Diagnosis & Brake Checks</p>
                                        <p>Message with photo and video</p>
                                        <p>Expect free call from us</p>
                                    </div>
                                    <button className={style.readMore}>Read more </button>
                                </div>
                            </div>
                            <div className="w-100 d-flex flex-row-reverse mt-2" id={style.colRight}>
                                <div className={style.wrapper} >
                                    <div className={style.featureIcon}>
                                        <FontAwesomeIcon className={style.icon} icon={faPhone} />
                                    </div>
                                    <h4 className={style.phnNumber}><span>24hr Hotline</span> +880148724875</h4> <hr className={style.hr} />
                                    <div className={style.phoneText}>
                                        <p>Mobile: 02 562-958</p>
                                        <p>Fax: 02 562-95</p>
                                        <p>Email: autoRepair@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={style.Carousel} className="slider container mt-5 mb-5">
                <h1 className={style.CarouselTitle}>Gallery</h1>
                <Carousel children={true} infinite={true} show={3.5} slide={4} swiping={true} transition={0.5} responsive={true} >
                    <img className={style.caroImg} src={aboutOne} alt="" />
                    <img className={style.caroImg} src={aboutTwo} alt="" />
                    <img className={style.caroImg} src={aboutThree} alt="" />
                    <img className={style.caroImg} src={aboutFive} alt="" />
                    <img className={style.caroImg} src={aboutSix} alt="" />
                </Carousel>
            </div>
            <Footer />
        </section>
    )
}
