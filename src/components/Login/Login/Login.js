import React, { useContext, useState } from 'react';
import GlobalNavbar from '../../GlobalNavbar/GlobalNavbar';
import Footer from '../../Home/Footer/Footer';
import './Login.css';
import log from '../../../img/login_transfarent.png';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const { dispatch } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userObj = {
                username,
                password,
            }
            console.log(userObj)
            const res = await axios.post("http://localhost:5000/user/login", userObj)
            console.log(res)
            res.data && Swal.fire({
                icon: 'success',
                title: 'Logged in successfully',
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            localStorage.setItem("token", JSON.stringify(res.data.token))
            history.push("/dashboard/welcome")
        } catch (err) {
            console.log(err)
            err && Swal.fire({
                icon: 'error',
                title: 'Logged in failed',
            })
        }
    }
    return (
        <>
            <div className="login__container ">
                <GlobalNavbar />
                <div className="container form__container">
                    <div className="form__left" >
                        <div className="flImg__container">
                            <img src={log} alt="" className="fl__img" />
                        </div>
                    </div>
                    <div className="form__right">
                        <form className="container p-4">
                            <h4 className="fl__title">Sign in</h4>
                            <p className="fl__semiTitle">Sign in to continue to our application</p>
                            <div className="mb-2">
                                <label htmlFor="exampleInputEmail1" className="form-label lavel">Username</label>
                                <input
                                    type="email"
                                    className="form-control fmc"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => setUsername(e.target.value)}
                                />

                            </div>
                            <div className="mb-2">
                                <label htmlFor="exampleInputPassword1" className="form-label lavel">Password</label>
                                <input
                                    type="password"
                                    className="form-control fmc"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn__login" onClick={handleSubmit}>Sign in</button>
                            <div className="d-flex justify-content-center mt-3">
                                <Link to="/signup" className="link">
                                    <p className="sign__hover">Didn't have an account?</p>
                                </Link>
                                <Link to="/signup" className="link">
                                    <p className="ms-3 sign__hover">forgot password?</p>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login