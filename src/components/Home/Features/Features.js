import React from 'react';
import style from './Features.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faClock, faPhone } from '@fortawesome/free-solid-svg-icons'
const Features = () => {
    return (
        <section className="container mt-4 pt-4 mb-4">

            <div className="row">
                <div className="col-md-4">
                    <div className={style.wrapper}>
                        <div className={style.featureIcon}>
                            <FontAwesomeIcon className={style.icon} icon={faEnvelope} />
                        </div>
                        <p className={style.FeatureTitle}>free apointments</p>
                        <ul>
                            <li>Free Diagnosis & Brake Checks</li>
                            <li>Message with photo and video</li>
                            <li>Expect free call from us</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={style.wrapper}>
                        <div className={style.featureIcon}>
                            <FontAwesomeIcon className={style.icon} icon={faClock} />
                        </div>
                        <p className={style.FeatureTitle}>Working time</p>
                        <ul>
                            <li>Free Diagnosis & Brake Checks</li>
                            <li>Message with photo and video</li>
                            <li>Expect free call from us</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={style.wrapper}>
                        <div className={style.featureIcon}>
                            <FontAwesomeIcon className={style.icon} icon={faPhone} />
                        </div>
                      <h4>715.387.5006</h4>
                      <p>Mobile: 02 562-958</p>
                      <p>Fax: 02 562-95</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Features;