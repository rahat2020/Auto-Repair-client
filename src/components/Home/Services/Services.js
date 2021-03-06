import React, { useEffect, useState } from 'react';
import style from './Services.module.css';
// import Typing from 'react-typing-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
// import services from '../../../Data/Services';
const Services = () => {
    const [service, setService] = useState([])
    // console.log(service)
    useEffect(() => {
        const url = `http://localhost:5000/showService`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [service])

    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000 });
    })
    return (
        <section className="container mt-5 pt-5 mb-5">
            {/* <Typing speed={100}>
            </Typing> */}
            <div className={style.titleText}>
                <h2 className={style.title}>Our<span className={style.titleHalf}> Services</span></h2>
            </div>

            <div className="row">

                {
                    service.slice(0, 4).map((item) => (
                        <div data-aos="fade-up" className="col-md-3 mt-5 pt-4">
                            <div className="card border-0 shadow">
                                <div className="card-title text-secondary p-1">
                                    <h5 className="fs-4">{item.name}</h5>
                                </div>
                                <div className="card-img">
                                    <img src={item.imgURL} alt="" className={style.cardImg} />
                                </div>
                                <div className="card-body">
                                    <p className={style.cardText}>{item.description}</p>
                                    <Link to={`/details/${item._id}`}>
                                        <button className={style.btnReadmore}>
                                            Read more <FontAwesomeIcon className={style.arrow} icon={faArrowRight} />
                                        </button>
                                    </Link>
                                </div>
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