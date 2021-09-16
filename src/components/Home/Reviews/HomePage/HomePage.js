import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './HomePage.module.css'
const readMore = {
    color: '#5653f1',
    cursor: 'pointer',
    fontWeight: '600'
}
const Text = {
    height: "60px",
    fontSize: "15px",
    fontWeight: "400",
    fontFamily: 'sarif',
    color: "gray",
}

const HomePage = ({ item: { id, img, position, description, name, date } }) => {
    const truncate = (text, n) => {
        return text?.length > n ? text.substr(0, n - 1) + " ..." : text;
    }
    return (
        <section className="container mt-5 pt-5 mb-5">
            <div data-aos="fade-up" className="card shadow" className={style.blogContainer} data-aos="zoom-in" data-aos-duration={500 * `${id}`}>
                <div className="d-flex justify-content-between">
                    <div className="blog-head-one">
                        <p className={style.blogDate}> <FontAwesomeIcon className={style.blogIcon} icon={faCalendarAlt} />{date}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <img src={img} className="card-img-top rounded" className={style.reviewImage} alt={id} />
                    <h5 className={style.blogTitle}>{name}</h5> <br />
                    <p className={style.blogger}>{position}</p>
                </div>


                <div className="card-body h-50">
                    <p className="card-text text-justify " style={Text}>
                        {truncate(description, 105)}
                        <span style={readMore} >Read more</span>
                    </p>
                    <div className={style.socialIcon}>
                    <Link to="https://www.facebook.com/KaziRahat1020/"><FontAwesomeIcon className={style.icon} icon={faFacebookSquare} /></Link>
                    <Link to="https://twitter.com/home"> <FontAwesomeIcon className={style.icon} icon={faTwitterSquare} /></Link>
                    <Link to="/"><FontAwesomeIcon className={style.icon} icon={faInstagramSquare} /></Link>
                </div>
                </div>

               
            </div>
        </section>
    );
};

export default HomePage;