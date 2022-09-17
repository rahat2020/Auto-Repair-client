import React, { useState } from 'react';
import GlobalNavbar from '../../GlobalNavbar/GlobalNavbar';
import Footer from '../../Home/Footer/Footer';
import './Signup.css';
import log from '../../../img/login_transfarent.png';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [file, setFile] = useState('')
    const history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/rahatdev1020/image/upload", data)
        console.log(uploadRes)
        const { url } = uploadRes.data
        const userObj = {
            username,
            email,
            password,
            img: url,
        }
        console.log(userObj)
        try {
            const res = await axios.post("https://autorepair.herokuapp.com/user/register", userObj)
            console.log(res.data)
            res.data && Swal.fire({
                icon: 'success',
                title: 'Signed up Successfully',
            })
            history.push("/login")
        } catch (err) {
            console.log(err)
            err && Swal.fire({
                icon: 'error',
                title: 'Registration failed',
            })
        }
    }
    return (
        <>
            <div className="signup__container ">
                <GlobalNavbar />
                <div className="container form__container" >
                    <div className="signup__left">
                        <div className="flImg__container">
                            <img src={log} alt="" className="fl__img" />
                        </div>
                    </div>
                    <div className="signup__right">
                        <form className="container p-4">
                            <h4 className="fl__title">Sign up</h4>
                            <p className="fl__semiTitle">Sign up to continue to our application</p>
                            <div className="mb-2">
                                <label htmlFor="exampleInputl1" className="form-label lavel">Username</label>
                                <input
                                    type="text"
                                    className="form-control sign__fmc"
                                    id="exampleInputl1"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="exampleInputEmail1" className="form-label lavel">Email</label>
                                <input
                                    type="email"
                                    className="form-control sign__fmc"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInputPassword1" className="form-label lavel">Password</label>
                                <input
                                    type="password"
                                    className="form-control sign__fmc"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInput1" className="form-label lavel">User Image</label>
                                <input
                                    type="file"
                                    className="form-control sign__fmc"
                                    id="exampleInput1"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </div>
                            <button type="submit" className="btn__signup" onClick={handleSubmit}>Sign up</button>
                            <div className="d-flex justify-content-center mt-3">
                                <Link to="/login" className="link">
                                    <p className="sign__hover">Already have an account? Sign in!</p>
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

export default Signup