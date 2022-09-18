import React, { useEffect, useState } from 'react';
import style from './ManageServices.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import axios from 'axios';

const ManageServices = () => {
    const [service, setService] = useState([])
    console.log(service)
    useEffect(() => {
        const url = `https://autorepair.herokuapp.com/service/get`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [service])

    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000 });
    })
    // delete user from userCollection

    const config = {
        headers: { token: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
    }
    const handleDeleteService = async (_id) => {
        try {
            const res = await axios.delete(`https://autorepair.herokuapp.com/service/delete/${_id}`, config)
            res && Swal.fire({
                icon: "success",
                title: "Service deleted successfully"
            })
            setTimeout(function () {
                res && window.location.reload();
            }, [1000])
            return () => clearTimeout(setTimeout());
        } catch (err) {
            console.log(err)
            err && Swal.fire({
                icon: "error",
                title: "Service deleted failed"
            })
        }
    }
    return (
        <section className="mt-5 pt-5 shadow">
            <div className={style.titleText}>
                <h2 className={style.title}>Manage<span className={style.titleHalf}> Services</span></h2>
            </div>

            <div className="container">
                <div className="row">

                    {
                        service.map((item) => (
                            <div data-aos="fade-up" className="col-md-3 mt-5 pt-4 mb-5">
                                <div className="card border-0 shadow">
                                    <div className="card-img">
                                        <img src={item.img} alt="" className={style.cardImg} />

                                    </div>
                                    <div className="card-body">
                                        <div className="card-title text-secondary p-1">
                                            <h5 className={style.cardTitle}>{item.name}</h5>
                                            <h5 className={style.cardHalfTitle}>Type: {item.type}</h5>
                                        </div>
                                        <p className={style.cardText}>{item.details.slice(0, 40)}</p>
                                        <p className={style.cardText}>$ {item.price}</p>
                                        <div className="editAndDlt d-flex justify-content-between align-content-center">
                                            <button className={style.btnEdit}>
                                                Edit <FontAwesomeIcon className={style.arrow} icon={faEdit} />
                                            </button>
                                            <button className={style.btnDelete} onClick={() => handleDeleteService(item._id)}>
                                                Delete<FontAwesomeIcon className={style.arrow} icon={faTrash} />
                                            </button>
                                        </div>
                                    </div>
                                    <svg style={{ borderRadius: "10px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="#1f77fc" fillOpacity="0.99" d="M0,128L34.3,138.7C68.6,149,137,171,206,170.7C274.3,171,343,149,411,117.3C480,85,549,43,617,58.7C685.7,75,754,149,823,154.7C891.4,160,960,96,1029,90.7C1097.1,85,1166,139,1234,144C1302.9,149,1371,107,1406,85.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                                    </svg>
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