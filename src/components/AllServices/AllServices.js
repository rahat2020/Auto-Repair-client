import React, { useEffect, useState } from 'react';
import style from './AllServices.module.css';
import Footer from '../Home/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlobalNavbar from '../GlobalNavbar/GlobalNavbar';

const AllServices = () => {
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
    return (
        <section className="mt-5 pt-5">
            <GlobalNavbar/>
            <div data-aos="fade-up" className={style.titleText}>
                <h2 className={style.title}>All<span className={style.titleHalf}> Services</span></h2>
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

                                        <button className={style.btnReadmore}>
                                            Read more <FontAwesomeIcon className={style.arrow} icon={faArrowRight} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default AllServices;