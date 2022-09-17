import React, { useContext, useEffect, useState } from 'react';
import style from './Services.module.css';
// import Typing from 'react-typing-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';
import Swal from 'sweetalert2';

const Services = () => {
    const [service, setService] = useState([])
    const [loading, setLoading] = useState(true)
    // console.log(service)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get('https://autorepair.herokuapp.com/service/get')
                setService(data.data)
                // console.log(data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000 });
    })
    const { user } = useContext(AuthContext);
    const notify = () => {
        Swal.fire({
            icon: "question",
            title: "Did you login?",
            text:"Please login first, thank you!!",
        })
    }
    // DATA FETCH LOADER
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, [2000])
        return () => clearTimeout(timeout);
    })
    return (
        <section className="container mt-5 pt-5 mb-5">
            <div className={style.titleText}>
                <h2 className={style.title}>Our<span className={style.titleHalf}> Services</span></h2>
            </div>

            <div className="row">
                {
                    loading ?
                        <h4>Please wait....</h4>
                        :

                        service.map((item, index) => (
                            <div data-aos="fade-up" className="col-md-3 mt-5 pt-4" key={index}>
                                <div className="card border-0 shadow" id={style.cirle}>
                                    <div className="card-img">
                                        <img src={item.img} alt="" className={style.cardImg} />
                                    </div>
                                    <div className="card-title text-secondary p-1">
                                        <h5 className={style.service__title}>{item.type}</h5>
                                    </div>
                                    <div className="card-body">
                                        <h5 className={style.service__title}>{item.name}</h5>
                                        <p className={style.cardText}>{item.details.slice(0, 30)}...</p>
                                        <p className={style.cardText}>$ {item.price}</p>
                                        {
                                            user ?
                                                <Link to={`/details/${item._id}`}>
                                                    <button className={style.btnReadmore}>
                                                        See more <FontAwesomeIcon className={style.arrow} icon={faArrowRight} />
                                                    </button>
                                                </Link>
                                                :
                                                <>
                                                    <button className={style.btnReadmore} onClick={notify}>
                                                        See more <FontAwesomeIcon className={style.arrow} icon={faArrowRight} />
                                                    </button>
                                                </>
                                        }
                                    </div>
                                    <svg style={{ borderRadius: "10px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="#1f77fc" fillOpacity="0.99" d="M0,128L34.3,138.7C68.6,149,137,171,206,170.7C274.3,171,343,149,411,117.3C480,85,549,43,617,58.7C685.7,75,754,149,823,154.7C891.4,160,960,96,1029,90.7C1097.1,85,1166,139,1234,144C1302.9,149,1371,107,1406,85.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                                    </svg>
                                </div>
                            </div>
                        ))
                }

            </div>

            <div className="d-flex justify-content-center align-items-center mt-5">
                <Link to="/allServices"> <button className={style.btn}>Explore all services</button></Link>
            </div>
        </section>
    );
};

export default Services;