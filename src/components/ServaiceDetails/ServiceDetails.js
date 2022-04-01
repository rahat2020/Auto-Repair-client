import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../../App';
import GlobalNavbar from '../GlobalNavbar/GlobalNavbar';
import style from './ServiceDetails.module.css';

export default function ServiceDetails() {
    const [checkout, setCheckout] = useState([])
    console.log(checkout)
    const [loggedInUser] = useContext(UserContext);

    const { _id } = useParams()
    console.log('id', _id)

    // const handleSubmit = () => {
    //     const items = { ...loggedInUser, product: checkout, date: new Date() }
    //     const url = `http://localhost:5000/itemOrdered`
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(items)
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    //     alert('item added successfully')
    // }
    
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
        <section className="container">
            <GlobalNavbar/>
            <div className="container mt-5 pt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className={style.imgContainer}>
                            <img src={details?.imgURL} alt="product img" className={style.img} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={style.dataContainer}>
                            <h3 className={style.h3}>{details?.name}</h3>
                            <span className={style.type}>{details?.type}</span>
                            <p className={style.description}>{details?.description}</p>

                            <div className={style.buyContainer}>
                                <span className={style.price}>Tk. {details?.price}</span>
                                <button className={style.btn}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          

        </section>
    )
}
