import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../Context/AuthContext';
import style from './Cart.module.css';

export default function Cart(props) {

    const cart = props.cart;
    console.log(cart)
    const { user } = useContext(AuthContext);
    // console.log(user)

    const total = cart.reduce((initialPrice, allFoodItem) => initialPrice + allFoodItem.price, 0);
    console.log(total)
   
    const handleSubmit = async (e) => {
        localStorage.setItem('products', JSON.stringify(cart))
        localStorage.setItem('total', JSON.stringify(total))
    }
    const toastify = () => {
        Swal.fire({
            icon: "question",
            title: "Did you login?",
            text:"Please login first, thank you!!",
        })
    }
    return (
        <section className="border p-2">
            <div className="d-block justify-content-start align-items-center">
                <h5 className={style.CartTitle}>Cart</h5>
                <h6 className={style.length}>{cart.length} ITEM</h6>
            </div>
            <div className="d-flex justify-content-even align-items-start mt-3 mb-3">
                <div className="justify-content-start align-items-center">
                    <span className={style.title}>Subtotal</span> <br />
                    <small className={style.charge}> extra charges may apply</small>
                </div>
                <span className="ms-auto" id={style.dollar}>${total}</span>
            </div>
            <div className="d-flex justify-content-start align-items-center">
                {
                    user ?
                        <Link to="/pdDetails">
                            <button onClick={handleSubmit} className={style.btnAdd}>
                                checkout <FontAwesomeIcon icon={faArrowRight} className={style.CheckBtn} />
                            </button>
                        </Link>
                        :
                        <button onClick={toastify} className={style.btnAdd}>checkout <FontAwesomeIcon icon={faArrowRight} className={style.CheckBtn} /></button>
                }
            </div>
        </section>
    )
}
