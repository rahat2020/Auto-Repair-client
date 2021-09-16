import React from 'react';
import style from './Features.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faClock, faPhone, faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Features = () => {
    return (
        <section className="container mt-4 pt-4 mb-4">
            <div data-aos="fade-up" className="row bg-gradient ">
                <div className="col-md-4">
                    <div className={style.wrapper}>
                        <div className={style.featureIcon}>
                            <FontAwesomeIcon className={style.icon} icon={faEnvelope} />
                        </div>
                        <p className={style.FeatureTitle}>free apointments</p> <hr className={style.hr} />
                        <ul>
                            <li>Free Diagnosis & Brake Checks</li>
                            <li>Message with photo and video</li>
                            <li>Expect free call from us</li>
                        </ul>
                        <button className={style.btnReadmore}>
                            <FontAwesomeIcon className={style.arrow} icon={faArrowRight} /> Read more
                        </button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={style.wrapper} >
                        <div className={style.featureIcon} id={style.yellow}>
                            <FontAwesomeIcon className={style.icon} icon={faClock} />
                        </div>
                        <p className={style.FeatureTitle}>Working time</p><hr className={style.hr} />
                        <div className={style.li}>
                            <span>WEEK DAYS</span>
                            <span>05:00 - 22:00</span>
                        </div>
                        <div className={style.li}>
                            <span>SATURDAY:</span>
                            <span>05:00 - 22:00</span>
                        </div>
                        <div className={style.li}>
                            <span>SUNDAY: </span>
                            <span>CLOSED</span>
                        </div>
                        <div className={style.li}>
                            <span>EMERGENCY:</span>
                            <span>05:00 - 22:00</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={style.wrapper} >
                        <div className={style.featureIcon}>
                            <FontAwesomeIcon className={style.icon} icon={faPhone} />
                        </div>
                        <h4 className={style.phnNumber}>+880148724875</h4> <hr className={style.hr} />
                        <div className={style.phoneText}>
                            <p>Mobile: 02 562-958</p>
                            <p>Fax: 02 562-95</p>
                            <p>Email: autoRepair@example.com</p>

                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Features;