import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import './Order.css';
import Swal from 'sweetalert2';

const Order = () => {
    const { user } = useContext(AuthContext)
    const [data, setDeta] = useState([])
    console.log(data)
    const [pd, setPd] = useState([])
    console.log('pd', pd)
    useEffect(() => {
        data.map((i) => (
            setPd(i.PD)

        ))
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/order/orderedByEmail?email=` + user?.email)
                // console.log(res)
                setDeta(res.data)

            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [user])
    const handleDeleteOrder = async (_id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/order/delete/${_id}`)
            res && Swal.fire({
                icon: "success",
                title: "Order deleted successfully"
            })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className="order__container shadow">
                <h4 className="text-center border-bottom order__title">Order list</h4>
                <div className="ordered__user">
                    <div className="ol__left">
                        <p className="order__userData">User name:</p>
                        <p className="order__userData">User Email:</p>
                        <p className="order__userData">User Image:</p>
                        <p className="order__userData">Address:</p>
                        <p className="order__userData">Card Name:</p>
                        <p className="order__userData">Card Number: </p>
                        <p className="order__userData">Card CVC: </p>
                    </div>
                    <div className="ol__right">
                        <p className="olrght__data">{user.username}</p>
                        <p className="olrght__data">{user.email}</p>
                        <p className="olrght__data">
                            <img src={user.img} alt="user-img" className="olright__img" />
                        </p>
                        <p className="olrght__data">
                            {data.map((item, index) => (
                                <span key={index}>
                                    {item.address} ,
                                </span>
                            ))}
                        </p>
                        <p className="olrght__data">
                            {data.map((item, index) => (
                                <span key={index}>
                                    {item.cardName} ,
                                </span>
                            ))}
                        </p>
                        <p className="olrght__data">
                            {data.map((item, index) => (
                                <span key={index}>
                                    {item.cardNumber} ,
                                </span>
                            ))}
                        </p>
                        <p className="olrght__data">
                            {data.map((item, index) => (
                                <span key={index}>
                                    {item.cvc} ,
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
                <hr />
                <h4 className="mt-3 text-muted fw-bold">Service Ordered List</h4>
                <table className="table border table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S.N.</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Product Image</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        data.map((Sitem, index) => (
                            <tbody key={index}>
                                <tr>
                                    <th scope="row" className="text-muted fw-bold">1</th>
                                    <td data-title="Product Name" className="text-muted fw-bold">{Sitem.pdName}</td>
                                    <td data-title="Product Price" className="text-muted fw-bold">{Sitem.pdPrice}

                                    </td>
                                    <td data-title="Product Image" >
                                        <img src={Sitem.pdImg} alt="product-img" className="orderpd__img" />
                                    </td>
                                    <td data-title="Product Price" className="text-muted fw-bold">{Sitem.status}</td>
                                    <td data-title="Action">
                                        {
                                            Sitem ?
                                                <button className="orderBtn__delete" onClick={() => handleDeleteOrder(Sitem._id)}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                                :
                                                <button className="orderBtn__delete">
                                                    Not ordered
                                                </button>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }

                </table>

                <h4 className="mt-4 pt-2 text-muted fw-bold">Product Ordered List</h4>
                <table className="table border table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S.N.</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Product Image</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        data.map((item, index) => (

                            item.PD?.map((item, index) => (
                                <tbody key={index}>
                                    <tr >
                                        <th scope="row" className="text-muted fw-bold" >1</th>
                                        <td data-title="Product Name" className="text-muted fw-bold">{item?.name}</td>
                                        <td data-title="Product Price" className="text-muted fw-bold">{item?.price}</td>
                                        <td data-title="Product Image" >
                                            <img src={item?.img} alt="product-img" className="orderpd__img" />
                                        </td>
                                        <td data-title="Product Price" className="text-muted fw-bold">{item.status}</td>
                                        <td data-title="Action">
                                            {
                                                data ?
                                                    <button className="orderBtn__delete" onClick={() => handleDeleteOrder(data._id)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                    :
                                                    <button className="orderBtn__delete">
                                                        Not ordered
                                                    </button>
                                            }
                                        </td>
                                    </tr>
                                </tbody>

                            ))

                        ))
                    }



                </table>
            </div>
        </>
    )
}

export default Order