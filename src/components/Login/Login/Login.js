import React from 'react';
import style from './Login.module.css';
import login from '../../../img/login.svg';
import GlobalNavbar from '../../../components/GlobalNavbar/GlobalNavbar';

export default function Login() {
    return (
        <>
            <GlobalNavbar />
            <section className="container mt-5 pt-5">
                <div className="row mb-5 py-4" id={style.FormBox}>
                    <div className="col-md-6">
                        <div data-aos="fade-up" className={style.colLeft}>
                            <img className={style.LoginImg} src={login} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div data-aos="fade-up" className="registration">
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="inputName4" class="form-label">Name</label>
                                    <input type="name" name="name" class="form-control" id="inputName4" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">Email</label>
                                    <input type="email" name="email" class="form-control" id="inputEmail4" />
                                </div>
                                <div class="col-12">
                                    <label for="inputPassword4" class="form-label">Password</label>
                                    <input type="password" name="password" class="form-control" id="inputPassword4" />
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
