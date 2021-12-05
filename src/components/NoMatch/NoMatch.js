import React from 'react';
import style from './NoMatch.module.css';
import sadface from '../../img/sadface.gif';
import { Link } from 'react-router-dom';
import GlobalNavbar from '../GlobalNavbar/GlobalNavbar';
export default function NoMatch() {
    return (
        <>
        <GlobalNavbar/>
            <div className="d-block justify-content-center align-content-center px-4">
                <div className={style.gig}>
                    <img className={style.matchGif} src={sadface} alt="" />
                    <p className={style.message}>[ message: "Error Occurred" ]</p>
                </div>
                <div className="text-center">
                    <span className={style.ParaText}>Oops! Something went wrong.</span> <br />  <br />
                    <span className={style.ParaText}>If you're experiencing a critical issue, please  
                        <Link to="contacts"> email support.</Link>
                    </span>
                </div>
            </div>
        </>
    )
}
