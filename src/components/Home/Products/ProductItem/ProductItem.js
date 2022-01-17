import React from 'react';
import style from './ProductItem.module.css';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function ProductItem(props) {
    const { name, price, imgURL } = props.item
    return (
        <section className="col-md-3">
            <div className="py-3" id={style.cardContainer}>
                {/* <Link to="checkout"> */}
                    <div className="card h-75 w-100 shadow border-0" id={style.cardShadow}>
                        <div className={style.sneakar}>
                            <div className={style.circle} />
                            <img src={imgURL} alt="img" className={style.cardImg} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center mt-2">{name}</h5>
                            <div className="ratings">

                            </div>
                            <div className="mb-3 mt-3" id={style.sizes}>
                                <button className={style.btnSizes}>$ {price}</button>
                                <button className={style.btnPurchase} onClick={() => props.handleAddItem(props.item)}>
                                    <FontAwesomeIcon icon={faPlus} id={style.btnIcon} />
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                {/* </Link> */}
            </div>
        </section>
    )
}
