import React, { useState, useEffect } from 'react';
import style from './TeamMembers.module.css';
import team from '../../../Data/team.js'
import Typing from 'react-typing-animation';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const TeamMembers = () => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        setMembers(team)
    }, [])
    return (
        <section className="container mt-5 pt-5 mb-5">
            <Typing speed={400}>
                <div className={style.titleText}>
                    <h2 className={style.title}>Meet our<span className={style.titleHalf}> Specialists</span></h2>
                </div>
            </Typing>
            <div className="row mt-5 pt-5" id={style.CardDetails}>
                {
                    members.map((member) => (
                        <div data-aos="zoom-in" className="col-md-3 ">
                            <div class="card m-1 shadow border-0 rounded" id={style.singleCard}>
                                <img src={member.img} class="card-img-top" className={style.cardImg} alt="..." />

                                <div class="card-body">
                                    <div className="d-block">
                                        <span class={style.cardTitle}>{member.name}</span>
                                        <br />
                                        <span className={style.cardPosition}>{member.position}</span>
                                    </div>

                                    <div className="d-flex justify-content-between mb-1">
                                        <span class={style.email}>{member.email}</span>
                                        <span class={style.phone}>{member.phone}</span>
                                    </div>

                                    <div className={style.socialIcon}>
                                        <Link to="https://www.facebook.com/KaziRahat1020/"><FontAwesomeIcon className={style.icon} icon={faFacebookSquare} /></Link>
                                        <Link to="https://twitter.com/home"> <FontAwesomeIcon className={style.icon} icon={faTwitterSquare} /></Link>
                                        <Link to="/"><FontAwesomeIcon className={style.icon} icon={faInstagramSquare} /></Link>
                                    </div>
                                    <Link to="/" className={style.btnReadmore}>
                                        <FontAwesomeIcon className={style.arrow} icon={faArrowRight} /> Contact with me
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default TeamMembers;