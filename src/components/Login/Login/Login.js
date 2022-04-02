import React from 'react';
import style from './Login.module.css';
import login from '../../../img/login.svg';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { firebaseConfigFrameWork, handleGoogleSignIn, handleLogIn, handleSignUp } from '../LoginManager/LoginManager';
import { UserContext } from '../../../App';
import GlobalNavbar from '../../../components/GlobalNavbar/GlobalNavbar';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function Login() {

    // access firebase config
    firebaseConfigFrameWork();
    const [newUser, setNewUser] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        emailValid: true,
        passwordValid: true,
        confirmPasswordValid: true,
        error: ''
    });

    // For using sign in with google

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    // For using login and signup
    const handleSubmit = (event) => {
        if (!newUser && user.email && user.password) {
            setIsLoading(true);
            handleLogIn(user.email, user.password)
                .then(res => {
                    if (res.email) {
                        handleLogInUser(res, true);
                    }
                    else {
                        const newUser = {
                            error: res
                        }
                        setLoggedInUser(newUser);
                        setIsLoading(false);
                    }
                })
        }
        if (newUser && user.email && user.password && user.confirmPassword) {
            // setIsLoading(true);
            if (user.password.length === user.confirmPassword.length) {
                handleSignUp(user.name, user.email, user.confirmPassword)
                    .then(res => {
                        if (res.email) {
                            handleLogInUser(res, false);
                            const userDetail = { ...user };
                            userDetail.error = "";
                            setUser(userDetail);
                            setIsLoading(false);
                        }
                        else {
                            const newUser = {
                                error: res
                            }
                            setLoggedInUser(newUser);
                            const userDetail = { ...user };
                            userDetail.error = "";
                            setUser(userDetail);
                            setIsLoading(false);
                        }
                    })
            }
            else {
                const userDetail = { ...user };
                userDetail.error = "Confirm password do not match";
                setUser(userDetail);
                setIsLoading(false);
            }
        }
        event.preventDefault();
    }

    // For accessing user information from input and validating data
    const handleBlur = (event) => {
        let isValid = true;
        if (event.target.name === 'email') {
            isValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            isValid = event.target.value.length >= 6 && /\d{1}/.test(event.target.value);
        }
        if (isValid) {
            const newUser = { ...user };
            newUser[event.target.name] = event.target.value;
            newUser[event.target.name + "Valid"] = true;
            setUser(newUser);
        }
        else {
            const newUser = { ...user };
            newUser[event.target.name + "Valid"] = false;
            setUser(newUser);
        }
    }

    // For using to reduce repetition code
    const handleLogInUser = (res, isReplace) => {
        fetch('https://enigmatic-coast-10449.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: res.email })
        })
            .then(res => res.json())
            .then(data => {
                const newUser = {
                    email: res.email,
                    name: res.displayName,
                    error: '',
                    photo: res.photoURL,
                    isAdmin: data
                }
                setLoggedInUser(newUser);
                setIsLoading(false);
                isReplace && history.replace(from);
            })
    }

    // Conditionally showing log in and create new account button
    const handleLogInOrCreate = () => {
        setNewUser(!newUser);
        const newLoggedInUser = { ...loggedInUser };
        newLoggedInUser.error = '';
        setLoggedInUser(newLoggedInUser);
        const userDetail = { ...user };
        userDetail.error = '';
        setUser(userDetail);
    }

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
                        <div className="flex justify-center container">
                            <div className="mt-4 ">
                                <div data-aos="fade-up" className="bg-white p-4 border-2 rounded-md mb-5">
                                    <h4 className="font-bold text-lg text-center" id={style.title}>{newUser ? 'Create an account' : 'Log In here'}</h4>
                                    {
                                        user.error &&
                                        <h6 className="text-red-500 text-center mt-3">{user.error}</h6>
                                    }
                                    {
                                        loggedInUser.error &&
                                        <h6 className="text-red-500 text-center mt-3">{loggedInUser.error}</h6>
                                    }
                                    {
                                        loggedInUser.email &&
                                        <h6 className="text-green-500 text-center mt-3">Signed up successfully</h6>
                                    }
                                    <div className=" ">

                                        <div data-aos="fade-down">
                                            <form className={style.loginform} onSubmit={handleSubmit}>

                                                {
                                                    newUser &&
                                                    <input type="text" onBlur={handleBlur} name="name" placeholder="Name" required />
                                                }
                                                <br />
                                                <input type="text" onBlur={handleBlur} name="email" placeholder="Email" required />
                                                <br />
                                                {
                                                    !user.emailValid &&
                                                    <span className="text-red-500">Enter a valid email</span>
                                                }
                                                <input type="password" onBlur={handleBlur} name="password" placeholder="Password" required /><br />
                                                {
                                                    !user.passwordValid &&
                                                    <span className="text-red-500">Enter a valid password (at least 6 character and number)</span>
                                                }
                                                {
                                                    newUser && <input type="password" onBlur={handleBlur} name="confirmPassword" placeholder="Confirm password" required />
                                                }
                                                <br />
                                                <input id={style.submitbtn} type="submit" value={newUser ? "Create an account" : "Login"} />
                                            </form>
                                            <h6 className="mt-3 text-center">
                                                {
                                                    newUser ?
                                                        <span>Already have an account?<button className={style.createBtn} onClick={() => handleLogInOrCreate()}>Login</button></span>
                                                        :
                                                        <span>Don't have an account? <button className={style.createBtn} onClick={() => handleLogInOrCreate()}>Create an account</button></span>
                                                }
                                            </h6>

                                            <hr />
                                            <h5 className="text-center text-lg">Or</h5>
                                            <hr />
                                            <div className="text-center" id={style.socialbtn}>
                                                <button onClick={googleSignIn}><FontAwesomeIcon icon={faGoogle} size="lg" /> Continue With Google</button><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
