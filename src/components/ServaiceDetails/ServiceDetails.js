import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../../App';
import style from './ServiceDetails.module.css';

export default function ServiceDetails() {
    const [checkout, setCheckout] = useState([])
    console.log(checkout)
    const [loggedInUser] = useContext(UserContext);

    const { productID } = useParams()
    console.log('productID', productID)
    
    const handleSubmit = () => {
        const items = { ...loggedInUser, product: checkout, date: new Date() }
        const url = `https://young-falls-22201.herokuapp.com/itemOrdered`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        alert('item added successfully')
    }

    useEffect(() => {
        const url = `https://young-falls-22201.herokuapp.com/${productID}`
        fetch(url)
            .then(response => response.json())
            .then(data => setCheckout(data))
    }, [productID])
    return (
        <section className="container mt-5 pt-5 mb-5">
          <div className="row">
              <div className="col-md-7">
                  <div className="colLeft">
                      <img src="" alt="" />
                  </div>
              </div>
              <div className="col-md-5"></div>
          </div>
        </section>
    )
}
