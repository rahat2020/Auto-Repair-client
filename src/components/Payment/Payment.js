import React from 'react';
import style from './Payment.module.css';
import GlobalNavbar from '../../components/GlobalNavbar/GlobalNavbar';
import Footer from '../../components/Home//Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faCcVisa, faPaypal } from '@fortawesome/free-brands-svg-icons';
export default function Payment() {
    return (
        <>
            <GlobalNavbar />
            <div className="mt-5 pt-5 mb-5 pt-3 d-flex justify-content-center align-content-center" id={style.paymentContainer}>
                <div className="shadow" id={style.payBox}>
                    <h5 id={style.title}>Payment</h5>
                    <p className="mt-2" id={style.payMethd}>Choose payment method below</p>

                    <div className="d-flex justify-content-between align-items-center" id={style.payOptions}>
                        <div id={style.boxOne}>
                            <FontAwesomeIcon icon={faCcVisa} id={style.icon} />
                            <p id={style.PaymentTitle}>PAY WITH CREDIT CARD</p>
                        </div>
                        <div id={style.boxOne}>
                            <FontAwesomeIcon icon={faPaypal} id={style.icon} />
                            <p id={style.PaymentTitle}>PAY WITH PAYPAL</p>
                        </div>
                        <div id={style.boxOne}>
                            <FontAwesomeIcon icon={faAmazon} id={style.icon} />
                            <p id={style.PaymentTitle}>PAY WITH AMAZON</p>
                        </div>
                    </div>

                    {/* billing info */}
                    <div className="billing">
                        <div className="row">
                            <div className="col-md-6">
                                <div className=" ">
                                    <span className={style.billOne}>1</span>
                                    <span Billing className={style.billTwo}>Billing Info</span>
                                </div>
                            </div>
                            <div className="col-md-6"></div>
                        </div>



                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
