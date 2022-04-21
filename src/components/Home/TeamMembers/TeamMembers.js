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
                        <div className="col-md-3 col-sm-6 team-wrap">
                            <div className="text-center" id={style.teamMember}>
                                <div className={style.teamImg}>
                                    <img src={member.img} id={style.img} alt="mechanics"/>
                                    <div className={style.overlay}>
                                        <div className="text-center container" id={style.teamDetails}>
                                            <div className="d-flex justify-content-center align-content-center text-white mb-3">
                                                <span className={style.phone}>Phone: {member.phone}</span>
                                                <span className={style.phone}>Email: {member.email}</span>
                                            </div>

                                            <div className="mt-20" id={style.socials}>
                                                <Link id={style.link} to=""><FontAwesomeIcon className={style.icon} icon={faFacebookSquare} /></Link>
                                                <Link id={style.link} to=""><FontAwesomeIcon className={style.icon} icon={faTwitterSquare} /></Link>
                                                <Link id={style.link} to=""><FontAwesomeIcon className={style.icon} icon={faInstagramSquare} /></Link>
                                            </div>
                                            <Link to="/contactMe">
                                                <button className="mt-3 btn-primary border-0 rounded" id={style.contact}>Contact me</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                                <div className={style.footer}>
                                    <h6 className={style.teamTitle}>{member.name}</h6>
                                    <span className={style.position}>{member.position}</span>
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