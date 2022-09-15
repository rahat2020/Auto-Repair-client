import React, { useContext } from 'react';
import style from './WelcomePage.module.css';
import dashboard from '../../../img/dashboard.svg';
import { AuthContext } from '../../../Context/AuthContext';

export default function WelcomePage() {
    const { user } = useContext(AuthContext);
    
    return (
        <section className="mt-5 pt-5 mx-4">
            <div className={style.welcome}>
                <div className={style.dashboardImg}>
                    <img data-aos="fade-down" src={dashboard} alt="" className={style.dashimg}/>
                    <h2 data-aos="fade-up" className={style.welcomeTitle}>{ user ? user.username : ""  } welcome <br/> to the <br /> dashboard</h2>
                </div>
            </div>
        </section>
    )
}
