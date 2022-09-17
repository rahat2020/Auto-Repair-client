import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import GlobalNavbar from '../GlobalNavbar/GlobalNavbar';
import style from './ProductsDetails.module.css';

export default function ProductsDetails() {

    const PD = JSON.parse(localStorage.getItem('products'))
    const total = JSON.parse(localStorage.getItem('total'))
    // const grandTotal = total - 122

    const handleTotal = (price) => {
        // console.log('price',price)
        const grandTotal = total - price;
        console.log('grand total', grandTotal)
        localStorage.setItem('total', grandTotal)
    }

    const handleRemove = (name) => {
        console.log('name', name)

        const products = JSON.parse(localStorage.getItem('products'))
        const index = products.findIndex(product => product.name === name);
        if (index > -1) {
            products.splice(index, 1);
            console.log(products)
            localStorage.setItem('products', JSON.stringify(products))
        }
        Swal.fire({
            icon: "success",
            title: "Item removed"
        })
    }
    return (
        <section className="h-100" id={style.detailsContainer}>
            <GlobalNavbar />
            <div className="mt-5 pt-5 p-5" >
                <div className="d-flex justify-content-end align-items-center">
                    <span className={style.pd__total} style={{marginRight:"1rem"}}>Total price: ${total}</span>
                    <Link to="/PDPayment">
                        <button className={style.pd__buynow}>Buy Now</button>
                    </Link>
                </div>
                {
                    PD.map((item, index) => (
                        <div className=" mt-5" id={style.details} key={index}>
                            <div className={style.imgContainer}>
                                <img src={item.img} alt="product img" className={style.img} />
                            </div>

                            <div className={style.dataContainer}>
                                <h3 className={style.h3}>{item.name}</h3>
                                <small className={style.type}>Product-ID: {item._id}</small>
                                <div className="d-flex justify-content-start align-items-start mb-1 flex-column gap-2">
                                    <div className="d-fle">
                                        <span className="text-muted fw-bold">Type: </span> <span className={style.type}> {item.type}</span>
                                    </div>
                                    <span className={style.type}>
                                        <span className="text-muted fw-bold">Price:</span> ${item.price},
                                        <span className="text-muted fw-bold"> S.NO:</span> {index}
                                    </span>
                                    <span className={style.rating}>
                                        <span className="text-muted fw-bold">Rating: </span>
                                        <FontAwesomeIcon className={style.ratingIcon} icon={faStar} />
                                        <FontAwesomeIcon className={style.ratingIcon} icon={faStar} />
                                        <FontAwesomeIcon className={style.ratingIcon} icon={faStar} />
                                        <FontAwesomeIcon className={style.ratingIcon} icon={faStar} />
                                        <FontAwesomeIcon className={style.ratingIcon} icon={faStar} />
                                    </span>
                                    <span className={style.description}>
                                        <span className="text-muted fw-bold">Details:</span>
                                        {item.details}
                                    </span>

                                </div>

                                <button className={style.btnDelete}
                                    onClick={() =>
                                        `${handleRemove(item.name)} ${handleTotal(item.price)}`
                                    }

                                >
                                    <FontAwesomeIcon className={style.deleteIcon} icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
