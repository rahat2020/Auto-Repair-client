import React from 'react';
import style from './WhyChoose.module.css';
const WhyChoose = () => {
    return (
        <section className="container mt-5 pt-5 mb-5">
            <div className={style.titleText}>
                <h2 className={style.title}>Why<span className={style.titleHalf}> Us</span></h2>
            </div>

            <div className="row">
                <div className="col-md-4">col-left</div>
                <div className="col-md-8">col-right</div>
            </div>

        </section>
    );
};

export default WhyChoose;