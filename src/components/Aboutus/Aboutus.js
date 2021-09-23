import React from 'react'
import style from './Aboutus.module.css';
import carVideo from '../../img/carVideo.mp4';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import auto from '../../img/auto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                                <Link id={style.navItem} class="nav-link text-white fw-bold fs-5" aria-current="page" to="/">Services</Link>
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

            </div>
        </section>
    )
}
