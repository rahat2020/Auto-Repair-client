import React from 'react';
import style from './AddProducts.module.css';

export default function AddProducts() {
    return (
        <section className="container mt-3 pt-3 mb-5">
            <h3 className="d-flex justify-content-center align-content-center"> Add Products</h3>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Product name</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="name"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Product type</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="type"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Product details</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="write product details" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputCity" className="form-label">price</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="$1234"/>
                </div>
                <div className="col-md-9">
                    <label htmlFor="inputZip" className="form-label">Choose file</label>
                    <input type="file" className="form-control" id="inputZip" />
                </div>
                <div className="d-grid gap-2 ">
                    <button type="submit" className="btn btn-outline-primary">Add this one</button>
                </div>
            </form>
        </section>
    )
}
