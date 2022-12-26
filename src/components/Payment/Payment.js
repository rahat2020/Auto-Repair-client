import React, { useState } from 'react';
import style from './Payment.module.css';
import GlobalNavbar from '../../components/GlobalNavbar/GlobalNavbar';
import Footer from '../../components/Home//Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faCcVisa, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

export default function Payment() {
    const { user } = useContext(AuthContext);
    const Pdetails = JSON.parse(localStorage.getItem('Pdetails'))

    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [address, setAddresses] = useState('')
    const [expMonth, setExpMonth] = useState('')
    const [expYear, setExpYear] = useState('')
    const [zip, setZip] = useState('')
    const [cvc, setCvc] = useState('')

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const pdObject = {
            username: user.username,
            email: user.email,
            cardName,
            cardNumber,
            address,
            expMonth,
            expYear,
            zip,
            cvc,
            pdName: Pdetails ? Pdetails.name : null,
            pdImg: Pdetails ? Pdetails.img : null,
            pdPrice: Pdetails ? Pdetails.price : null,

        }
        // console.log(pdObject)
        try {
            const res = await axios.post("https://angry-sweatpants-bear.cyclic.app/order/add", pdObject)
            res && Swal.fire({
                icon: "success",
                title: "Order added successfully"
            })
            history.push('/dashboard/ordered')
        } catch (err) {
            console.log(err)
            err && Swal.fire({
                icon: "error",
                title: "Order placement failed"
            })
        }
    }

    return (
        <>

            <GlobalNavbar />
            <div className="mt-5 pt-5 mb-5 pt-3 d-flex justify-content-center align-content-center" id={style.paymentContainer}>
                <div className="card shadow" style={{ width: '18rem' }} id={style.imgContainer}>
                    <img src={Pdetails.img} className={style.payment__img} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{Pdetails.name}</h5>
                        <h5 className="card-title">${Pdetails.price}</h5>

                    </div>
                </div>

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

                    {/*  info */}
                    <div className=" mt-4 pt-2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className=" ">
                                    <span className={style.billOne}>1</span>
                                    <span className={style.billTwo}> Info</span>
                                </div>

                                <form className="row g-3 mt-3">
                                    <div className="col-md-12">
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="full name" value={`${user ? user.username : " "}`} disabled />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" value={`${user ? user.email : " "}`} disabled />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control"
                                            id="inputAddress" placeholder="Address - 1234 Main St" onChange={(e) => setAddresses(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="City" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" required placeholder="Zip" onChange={(e) => setZip(e.target.value)} />
                                    </div>
                                    <div className="col-12">
                                        <Link to="/pdDetails">
                                            <button type="submit" className={style.returnBtn}>Return to store</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>

                            {/* credit card info */}

                            <div className="col-md-6">
                                <div className={style.cardInfo}>
                                    <span className={style.billOne}>2</span>
                                    <span className={style.billTwo}>Credit Card info</span>
                                </div>
                                <form className="row g-3 mt-3">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control"
                                            id="inputEmail4" placeholder="cardholder name" name="name" required onChange={(e) => setCardName(e.target.value)} />
                                    </div>
                                    <div className="col-12">
                                        <input type="number" className="form-control" id="inputAddress"
                                            placeholder="card number - 1234-5678-9012-3456" name="card" required onChange={(e) => setCardNumber(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" className="form-control" placeholder="exp.month" required onChange={(e) => setExpMonth(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" className="form-control" placeholder="exp.year" required onChange={(e) => setExpYear(e.target.value)} />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="number" className="form-control" placeholder="cvc number" required onChange={(e) => setCvc(e.target.value)} />
                                    </div>
                                    <div className="col-12" id={style.proceedDiv} >
                                        <button type="submit" className={style.proceedBtn} onClick={handleSubmit}>Proceed</button>
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
