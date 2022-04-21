import React from 'react';
import style from './News.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const readMore = {
    color: '#5653f1',
    cursor: 'pointer',
    fontWeight: '600'
}
const cardText = {
    height: "140px",
    fontSize: ".88rem",
    textAlign: 'justify',
    fontWeight: "400",
    color: "#666666e7",
}

const News = ({ blog: { id, img, title, description, name, date } }) => {
    const truncate = (text, n) => {
        return text?.length > n ? text.substr(0, n - 1) + " ..." : text;
    }
    return (
        <section className="container mt-5 pt-5 mb-5">

            <div className="card shadow" id={style.blogContainer} data-aos="zoom-in" data-aos-duration={500 * `${id}`}>

                <div className="mb-3">
                    <img src={img} className={style.img} alt={id} />
                </div>
                <div className="d-flex justify-content-between px-3">
                    <div className="blog-head-one">
                        <p className={style.blogDate}> <FontAwesomeIcon className={style.blogIcon} icon={faCalendarAlt} />{date}</p>
                    </div>
                    <div className="blog-head-two">
                        <p className={style.blogger}> <FontAwesomeIcon className={style.blogIcon} icon={faUser} /> {name}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className={style.blogTitle}>{title}</h5>
                    <p className="card-text text-justify " style={cardText}>
                        {truncate(description, 215)}
                        <span style={readMore} >read more</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default News;