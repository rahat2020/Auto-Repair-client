import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import style from './AddProducts.module.css';
// import { useHistory } from 'react-router-dom';

export default function AddProducts() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [details, setDetails] = useState('')
    const [file, setFile] = useState('')
    const [type, setType] = useState('')

    const config = {
        headers: { token: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = new FormData();
            data.append('file', file)
            data.append('upload_preset', 'upload')
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/rahatdev1020/image/upload", data)
            const { url } = uploadRes.data

            const serviceObj = {
                name,
                price,
                details,
                type,
                img: url
            }
            console.log(serviceObj)
            const res = axios.post('http://localhost:5000/product/add', serviceObj, config)
            console.log(res)
            res && Swal.fire({
                icon: "success",
                title: "Product added successfully"
            })
        } catch (err) {
            console.log(err)
            err && Swal.fire({
                icon: "error",
                title: "Product added failed"
            })
        }


    }
    return (
        <section className="container mt-3 pt-3 mb-5 shadow rounded" id={style.AddProducts}>
            <div className={style.titleText}>
                <h2 className={style.title}>Add<span className={style.titleHalf}> Products</span></h2>
            </div>
            <form className="row g-3 mt-2">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Product name</label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="name"
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Product type</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="type"
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Product details</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="write service details"
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputCity" className="form-label">price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        placeholder="$1234"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="col-md-9">
                    <label htmlFor="inputZip" className="form-label">Chose file</label>
                    <input
                        type="file"
                        className="form-control"
                        id="inputZip"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div className="d-grid gap-2 ">
                    <button type="submit" className="btn btn-outline-primary" onClick={handleSubmit}>Add this one</button>
                </div>
            </form>

        </section>
    )
}
