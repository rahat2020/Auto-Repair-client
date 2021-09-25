import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './WhyChoose.module.css';
// import sliderFour from '../../../img/sliderFour.jpg';
// import sliderThree from '../../../img/sliderThree.jpg';
// import { Link } from 'react-router-dom';
import Typing from 'react-typing-animation';
import ReactPlayer from 'react-player'
const WhyChoose = () => {
    return (
        <section className="container mt-5 pt-5 mb-5">
            <Typing speed={400}>
                <div className={style.titleText}>
                    <h2 className={style.title}>Why<span className={style.titleHalf}> Us ?</span></h2>
                </div>
            </Typing>
            <div data-aos="fade-up" className="row mt-5 pt-4">
                <div className="col-md-3">
                    <div className={style.wrapper}>
                        <div className="choseTitle">
                            <h3 className={style.title}>WP Theme for Mechanics!</h3>
                            <p className={style.text}>Fixie tote bag ethnic keytar. Neutra vinyl American Apparel kale chips tofu art party, cardigan raw denim quinoa. Cray paleo tattooed, Truffaut skateboard street art PBR jean shorts Shoreditch farm-to-table Austin lo-fi Odd Futu.</p>
                        </div>
                        <button className={style.btnReadmore}>
                            <FontAwesomeIcon className={style.arrow} icon={faArrowRight} /> Read more
                        </button>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <h4> Our package</h4>
                    <div className="">
                        <ul className="mb-3" id={style.id}>
                            <li>✔ Over 900 Five Star Reviews</li>
                            <li>✔ Free Diagnosis & Brake Checks</li>
                            <li>✔ No Appointment Necessary</li>
                            <li>✔ Free Loaner Cars or Shuttle</li>
                            <li>✔ 2 Year Warranty on Service</li>
                            <li>✔ Serving Los Angeles Over 25 Years</li>
                            <li>✔ Lifetime Warranty on Body Work</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 bordered">
                   <ReactPlayer 
                   controls 
                   width="100%" 
                   height="19rem"
                   url="https://www.youtube.com/watch?v=eWUxqVFBq74"/>
                </div>
            </div>

        </section>
    );
};

export default WhyChoose;

