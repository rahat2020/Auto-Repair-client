import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import style from './AddAdmin.module.css'
// import { useHistory } from 'react-router-dom';

export default function AddService() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setisAdmin] = useState('')
    const [file, setFile] = useState('')

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
            isAdmin,
            img: url,
        }
        console.log(userObj)
        try {
            const res = await axios.post("http://localhost:5000/user/register", userObj)
            console.log(res.data)
            res.data && Swal.fire({
                icon: 'success',
                title: 'Admin added Successfully',
            })

        } catch (err) {
            console.log(err)
            err && Swal.fire({
                icon: 'error',
                title: 'Admin added failed',
            })
        }
    }
    return (
        <section className="container mt-3 pt-3 mb-5 shadow rounded" id={style.addAdmin}>
         <div className={style.titleText}>
                <h2 className={style.title}>Add<span className={style.titleHalf}> Admin</span></h2>
            </div>
            <form className="row g-3 mt-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Username</label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="name"
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="col-6">
                    <label htmlFor="inputAddress" className="form-label">Admin Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Admin or User</label>
                    <select className="form-select" aria-label="select role"
                        onChange={(e) => setisAdmin(e.target.value)}>
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>

                </div>
                <div className="col-md-12">
                    <label htmlFor="inputZip" className="form-label">User Image</label>
                    <input
                        type="file"
                        className="form-control"
                        id="inputZip"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div className="d-grid gap-2 ">
                    <button type="submit" className="btn btn-outline-primary" onClick={handleSubmit}>Add Admin</button>
                </div>
            </form>
        </section>
    )
}
