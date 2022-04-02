import React, { useEffect, useState } from 'react';
import style from './Payment.module.css';
import GlobalNavbar from '../../components/GlobalNavbar/GlobalNavbar';
import Footer from '../../components/Home//Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faCcVisa, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function Payment() {
    // const [total, setTotal] =useContext(UserContext)
    // console.log('this is total',total)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // console.log('this is logged in', loggedInUser)


    const [checkout, setCheckout] = useState([])
    console.log(checkout)

    const handleSubmit = () => {
        const items = { ...loggedInUser, product: checkout, date: new Date() }
        const url = `http://localhost:5000/serviceOrdered`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(response => response.json())
            .then(data => {
                Swal.fire(
                    'Success',
                    'Your order is confirmed',
                    'success'
                )
            })

    }

    const { _id } = useParams()
    console.log('id', _id)
    const details = checkout.find(pd => pd?._id === _id)
    console.log('details of single item', details)

    useEffect(() => {
        const url = `http://localhost:5000/serviceDetails/${_id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setCheckout(data))
            .then(data => console.log(data))
    }, [_id])
    return (
        <>
            <GlobalNavbar />
            <div className="mt-5 pt-5 mb-5 pt-3 d-flex justify-content-center align-content-center" id={style.paymentContainer}>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={details?.imgURL} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{details?.name}</h5>
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
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="full name" value={`${loggedInUser.name ? loggedInUser.name : " "}`} disabled />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" value={`${loggedInUser.email ? loggedInUser.email : " "}`} disabled />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Address - 1234 Main St" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="City" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Zip" />
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

                                <form className="row g-3 mt-3" onSubmit={handleSubmit}>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" id="inputEmail4" placeholder="cardholder name" name="name" />
                                    </div>
                                    <div className="col-12">
                                        <input type="number" className="form-control" id="inputAddress" placeholder="card number - 1234-5678-9012-3456" name="card" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" className="form-control" placeholder="exp.month" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" className="form-control" placeholder="exp.year" />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="number" className="form-control" placeholder="cvc number" />
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
