import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Typing from 'react-typing-animation';
import style from './FAQ.module.css';
const FAQ = () => {
    return (
        <section className="container mt-5 pt-5 mb-5">
            <Typing speed={400}>
                <div className={style.titleText}>
                    <h2 className={style.title}>FAQ'S<span className={style.titleHalf}> Answer</span></h2>
                </div>
            </Typing>

            <div className="row mt-5 pt-4 mb-5">
                <div className="col-md-6">
                    <div data-aos="zoom-in" className="col-12 bg-white p-5 rounded" className={style.faqQue}>
                        <h2>FaQ's</h2>
                        <details className="mt-5" id={style.details}>
                            <summary><strong>How we can help you?</strong></summary>
                            <br />
                            <p>We accept a variety of credit and debit cards via our secure payment processor. Payment details are encrypted and secure. No card details are stored on our server.</p>
                        </details>
                        <hr />
                        <details id={style.details}>
                            <summary><strong>How will my order be impacted by the recent 2019 novel coronavirus (COVID-19) outbreak?</strong></summary>
                            <br />
                            <p>Every supplier is different. Your order will not be impacted, but it depends on the unique situation of the supplier you are working with. For the latest order updates, we advise you contact your supplier directly.</p>
                        </details>
                        <hr />
                        <details id={style.details}>
                            <summary><strong>Will my shipment get delayed due to the coronavirus(COVID-19)?</strong></summary>
                            <br />
                            <p>Deliveries may be delayed in some destination due to transportation restrictions. Please consult with your local ports or shipping companies regarding the latest updates.</p>
                        </details>
                        <hr />
                        <details id={style.details}>
                            <summary><strong>Can I cancel orders?</strong></summary>
                            <br />
                            <p>Yes, you can cancel any orders within 12 hours after ordering any service.</p>
                        </details>
                    </div>
                </div>
                <div data-aos="zoom-in" className="col-md-6" >
                    <h2 className="text-secondary">Ask a question</h2>
                    <form class="row g-3 mt-2">
                        <div class="col-md-6">

                            <input type="email" class="form-control" placeholder="your email" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="your name" />
                        </div>
                        <div class="col-12">

                            <textarea type="text" class="form-control" rows="5" id="inputAddress" placeholder="your questions" />
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                        <button className={style.btnReadmore}>
                            <FontAwesomeIcon className={style.arrow} icon={faArrowRight} /> Submit
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FAQ;