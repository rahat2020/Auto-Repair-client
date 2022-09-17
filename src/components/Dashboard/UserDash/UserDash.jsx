import React, { useContext, useEffect, useState } from 'react';
import style from './UserDash.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';
import {useHistory} from 'react-router-dom';

const UserDash = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [file, setFile] = useState('')
    const [update, setUpdate] = useState(false)
    const history = useHistory()

    const { user } = useContext(AuthContext)
    console.log(user._id)
    const handleUpdateSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/rahatdev1020/image/upload", data)
        console.log(uploadRes)
        const { url } = uploadRes.data
        const userObj = {
            userId: user._id,
            username,
            email,
            password,
            img: url,
        }
        console.log(userObj)
        try {
            const res = await axios.put("https://autorepair.herokuapp.com/user/update/" + user._id, userObj)
            console.log(res.data)
            res.data && Swal.fire({
                icon: 'success',
                title: 'User updated Successfully',
            })
            history.push("/login")
        } catch (err) {
            console.log(err)
            err && Swal.fire({
                icon: 'error',
                title: 'Update failed',
            })
        }
    }

    return (
        <section className="mt-5 pt-5 mb-4 shadow" id={style.userDash}>
            <div data-aos="fade-up" className={style.titleText}>
                <h2 className={style.title}>User<span className={style.titleHalf}> Profile</span></h2>
            </div>

            <div className="container border h-75 rounded " id={style.userBox}>
                <div className="">
                    <div className="d-flex justify-content-end align-items-center mt-2 mb-4">

                        {
                            update ?
                                <button className={style.userDash__edit} onClick={() => setUpdate(false)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                                :
                                <button className={style.userDash__edit} onClick={() => setUpdate(true)}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>

                        }
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-3 mb-4">
                        {
                            update ?
                                <>
                                    <label htmlFor="inputUserImg" className="form-label">User Image</label>
                                    <br />
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="inputUserImg"
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />
                                </>
                                :
                                <img src={user.img} alt="user-img" className={style.userimg} />
                        }
                    </div>
                    <div className="userDataObj">
                        <form className="row g-3 mt-3">
                            <div className="col-md-4">
                                <label htmlFor="inputEmail4" className="form-label">Username</label>
                                {
                                    update ?
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail4"
                                            Value={user.username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        :
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail4"
                                            Value={user.username}
                                        />
                                }
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputPassword4" className="form-label">Password</label>
                                {
                                    update ?
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="inputPassword4"
                                            Value="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        :
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="inputPassword4"
                                            Value="password"
                                        />
                                }
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputAddress" className="form-label">Email</label>
                                {
                                    update ?
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputAddress"
                                            Value={user.email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        :
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputAddress"
                                            placeholder="email"
                                            Value={user.email}
                                        />
                                }
                            </div>
                            <div className="d-grid gap-2 mb-4">
                                <button type="submit" className="btn btn-outline-primary"
                                    onClick={handleUpdateSubmit}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserDash;