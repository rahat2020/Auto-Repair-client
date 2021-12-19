import React from 'react';
import style from './Payment.module.css';
import GlobalNavbar from '../../components/GlobalNavbar/GlobalNavbar';
import Footer from '../../components/Home//Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faCcVisa, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import {UserContext} from '../../App';
export default function Payment() {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext)
    return (
        <>
            <GlobalNavbar />
            <div className="mt-5 pt-5 mb-5 pt-3 d-flex justify-content-center align-content-center" id={style.paymentContainer}>
                <div className="shadow-lg" id={style.payBox}>
                    <h5 id={style.title}>Payment</h5>
                    <p className="mt-2" id={style.payMethd}>Choose payment method below</p>

                    <div className="d-flex justify-content-between align-items-center" id={style.payOptions}>
                        <div id={style.boxOne} className={style.visaCard}>
                            <FontAwesomeIcon icon={faCcVisa} id={style.icon} className={style.visaIcon} />
                            <p id={style.PaymentTitle}>PAY WITH CREDIT CARD</p>
                        </div>
                        <div id={style.boxOne} className={style.paypal}>
                            <FontAwesomeIcon icon={faPaypal} id={style.icon} />
                            <p id={style.PaymentTitle}>PAY WITH PAYPAL</p>
                        </div>
                        <div id={style.boxOne} className={style.amazon}>
                            <FontAwesomeIcon icon={faAmazon} id={style.icon} />
                            <p id={style.PaymentTitle}>PAY WITH AMAZON</p>
                        </div>
                    </div>

                    {/* billing info */}
                    <div className="billing mt-4 pt-2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className=" ">
                                    <span className={style.billOne}>1</span>
                                    <span Billing className={style.billTwo}>Billing Info</span>
                                </div>

                                <form className="row g-3 mt-3">
                                    <div className="col-md-12">
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="full name" value={`${loggedInUser.name ? loggedInUser.name : " "}`}/>
                                    </div>
                                    <div className="col-md-12">
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Address - 1234 Main St" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="City"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Zip"/>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className={style.returnBtn}>Return to store</button>
                                    </div>
                                </form>

                            </div>

                            {/* credit card info */}
                            <div className="col-md-6">
                                <div className=" ">
                                    <span className={style.billOne}>2</span>
                                    <span Billing className={style.billTwo}>Credit Card info</span>
                                </div>

                                <form className="row g-3 mt-3">
                                    <div className="col-md-12">
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="cardholder name"/>
                                    </div>
                                    <div className="col-12">
                                        <input type="number" className="form-control" id="inputAddress" placeholder="card number - 1234-5678-9012-3456" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" className="form-control" placeholder="exp.month"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" className="form-control" placeholder="exp.year"/>
                                    </div>
                                    <div className="col-md-12">
                                        <input type="number" className="form-control" placeholder="cvc number"/>
                                    </div>
                                    <div className="col-12" id={style.proceedDiv}>
                                        <button type="submit" className={style.proceedBtn}>Proceed</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
