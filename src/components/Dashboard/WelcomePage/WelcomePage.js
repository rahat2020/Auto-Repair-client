import React from 'react';
import style from './WelcomePage.module.css';
import dashboard from '../../../img/dashboard.svg';
export default function WelcomePage() {
    return (
        <section className="mt-5 pt-5 mx-4">
            <div className={style.welcome}>
                <div className={style.dashboardImg}>
                    <img data-aos="fade-down" src={dashboard} alt="" className={style.dashimg}/>
                    <h2 data-aos="fade-up" className={style.welcomeTitle}>welcome <br/> to the <br /> dashboard</h2>
                </div>
              
            </div>

        </section>
    )
}
