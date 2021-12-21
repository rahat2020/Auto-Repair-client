import React, { useEffect, useState } from 'react';
import style from './ManageServices.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';

const ManageServices = () => {
    const [service, setService] = useState([])
    console.log(service)
    useEffect(() => {
        const url = `http://localhost:5000/showService`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [service])

    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000 });
    })
    // delete user from userCollection
    const handleDeleteService = (_id) => {
        fetch(`http://localhost:5000/deleteServices/${_id}`, {
            method: 'DELETE'
        })
            .then((res) => {
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Hey yooo dude!',
                        text: 'You want to delete this item?',
                        icon: 'question'
                    }).then((result) => {
                        if (result) {
                            // history.push('/dashboard')
                            console.log(result)
                        }
                    })
                }
                if (res.status === 401) {
                    alert('data is not uploaded')
                }
            })

        console.log('Services is deleted')
    }
    return (
        <section className="mt-5 pt-5">
            <div data-aos="fade-up" className={style.titleText}>
                <h2 className={style.title}>Manage<span className={style.titleHalf}> Services</span></h2>
            </div>

            <div className="container">
                <div className="row">

                    {
                        service.map((item) => (
                            <div data-aos="fade-up" className="col-md-3 mt-5 pt-4 mb-5">
                                <div className="card border-0 shadow">
                                    <div className="card-title text-secondary p-1">
                                        <h5 className="fs-4">{item.name}</h5>
                                    </div>
                                    <div className="card-img">
                                        <img src={item.imgURL} alt="" className={style.cardImg} />
                                    </div>
                                    <div className="card-body">
                                        <p className={style.cardText}>{item.description}</p>

                                        <div className="editAndDlt d-flex justify-content-between align-content-center">
                                            <button className={style.btnEdit}>
                                                Edit <FontAwesomeIcon className={style.arrow} icon={faEdit} />
                                            </button>
                                            <button className={style.btnDelete} onClick={() => handleDeleteService(item._id)}>
                                                Delete<FontAwesomeIcon className={style.arrow} icon={faTrash} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ManageServices;