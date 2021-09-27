import React from 'react'
import Typing from 'react-typing-animation';
import { faBriefcase, faUser, faHandshake, faLink} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './OurMotto.module.css';
import { Link } from 'react-router-dom';
export default function OurMotto() {
    return (
        <section className="container mt-5 pt-5 mb-5">
            <Typing speed={400}>
                <div className={style.titleText}>
                    <h2 className={style.title}>Our<span className={style.titleHalf}> Motto</span></h2>
                </div>
            </Typing>
            <div className="row mt-5 pt-5">
                <div className="col-md-3" id={style.col}>
                    <div className={style.shape}>
                        <FontAwesomeIcon className={style.arrowOne} icon={faBriefcase} />
                        <div class={style.innerShape} id={style.bkg1}>
                            <div class={style.content}>
                                <h2>Premium<br />Service</h2>
                                <Link className={style.view} to="/about">View More..</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3" id={style.col}>
                    <div className={style.shape}>
                        <FontAwesomeIcon className={style.arrowTwo} icon={faUser} />
                        <div class={style.innerShape} id={style.bkg2}>
                            <div class={style.content}>
                                <h2>User<br />Support</h2>
                                <Link className={style.view} to="/about">View More..</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3" id={style.col}>
                    <div className={style.shape}>
                        <FontAwesomeIcon className={style.arrowThree} icon={faHandshake} />
                        <div class={style.innerShape} id={style.bkg3}>
                            <div class={style.content}>
                                <h2>High<br />Scalability</h2>
                                <Link className={style.view} to="/about">View More..</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3" id={style.col}>
                    <div className={style.shape}>
                        <FontAwesomeIcon className={style.arrowFour} icon={faLink} />
                        <div class={style.innerShape} id={style.bkg4}>
                            <div class={style.content}>
                                <h2>Multiple<br />Services</h2>
                                <Link className={style.view} to="/about">View More..</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}