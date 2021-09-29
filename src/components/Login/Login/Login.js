import React from 'react';
import style from './Login.module.css';
import loginSvgTwo from '../../../img/loginSvgTwo.png';
export default function Login() {
    return (
        <section className="container mt-5 pt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                    <div className={style.colLeft}>
                        <img className={style.LoginImg} src={loginSvgTwo} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <p>col right</p>
                </div>
            </div>
        </section>
    )
}
