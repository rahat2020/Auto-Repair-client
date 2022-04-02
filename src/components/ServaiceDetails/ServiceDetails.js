import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import GlobalNavbar from '../GlobalNavbar/GlobalNavbar';
import style from './ServiceDetails.module.css';

export default function ServiceDetails() {
    const history = useHistory();
    const [checkout, setCheckout] = useState([])
    // console.log(checkout)
    const { _id } = useParams()
    // console.log('id', _id)
    const details = checkout.find(pd => pd?._id === _id)
    // console.log('details of single item', details)

    useEffect(() => {
        const url = `http://localhost:5000/serviceDetails/${_id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setCheckout(data))
            .then(data => console.log(data))
    }, [_id])

    const handleService = (_id) =>{
        history.push(`/payment/${_id}`)
        console.log(_id)
    }
    return (
        <section className="h-100" id={style.detailsContainer}>
            <GlobalNavbar />
            <div className="mt-5 pt-5 p-5" >
                <div className=" mt-5" id={style.details}>
                    <div className={style.imgContainer}>
                        <img src={details?.imgURL} alt="product img" className={style.img} />
                    </div>

                    <div className={style.dataContainer}>
                        <h3 className={style.h3}>{details?.name}</h3>
                        <div className="d-flex justify-content-start align-items-start mb-1">
                            <span className={style.type}>{details?.type}</span>
                            <span className={style.rating}>
                                <FontAwesomeIcon className={style.ratingIcon} icon={faStar} />
                                <FontAwesomeIcon className={style.ratingIcon} icon={faStar} />
                                <FontAwesomeIcon className={style.ratingIcon} icon={faStar} />
                                <FontAwesomeIcon className={style.ratingIcon} icon={faStar} />
                                <FontAwesomeIcon className={style.ratingIcon} icon={faStar} />
                            </span>
                        </div>
                        <p className={style.description}>{details?.description}</p>

                        <div className={style.buyContainer}>
                            <span className={style.price}>Tk. {details?.price}</span>
                            <button className={style.btn}  onClick={() => handleService(_id)}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
