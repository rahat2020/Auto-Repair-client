import {React, useState} from 'react';
import style from './AddProducts.module.css';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function AddProducts() {
    const [product, setProduct] = useState({
        name:'',
        type:'',
        price:'',
        productDetails:'',
        imgURL:'',
    })

    const handleBlur = event => {
        console.log(event.target.name, event.target.value)
        const newData = {...product}
        newData[event.target.name] = event.target.value;
        setProduct(newData)
    }

    const handleImgUpload = event => {
        console.log(event.target.files)
        const imgData = new FormData();
        imgData.set('key', '4eb494ddc3d3fb6d479157f6d2a04273');
        imgData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                const imgData = { ...product }
                imgData.imgURL = response.data.data.display_url
                setProduct(imgData)
                // setImgURL(response.data.data.display_url);
                // alert("Image has added to the server");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleUpload = event => {
        event.preventDefault();
        if (product.imgURL !== '') {
          // console.log(product)
          const url = `http://localhost:5000/products`
          console.log(url)
          fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(product)
          })
          .then(response => {
              response.json()
                  .then((res) => {
                      if (response.status === 200) {
                          Swal.fire({
                              title: 'Hey yooo dude!',
                              text: 'Your have added new product!',
                              icon: 'success'
                          }).then((result) => {
                              if (result) {
                                  // history.push('/dashboard')
                                  console.log(result)
                              }
                          })
                      }
                      if (response.status === 401) {
                          alert('data is not uploaded')
                      }
                  })
          })
          // alert('You items added successfully')

      }
  }

    return (
        <section className="container mt-3 pt-3 mb-5">
            <h3 className="d-flex justify-content-center align-content-center"> Add Products</h3>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Product name</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="name" name="name" onBlur={handleBlur}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Product type</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="type" name="type" onBlur={handleBlur}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Product details</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="write product details" name="productDetails" onBlur={handleBlur}/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputCity" className="form-label">price</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="$1234" name="price" onBlur={handleBlur}/>
                </div>
                <div className="col-md-9">
                    <label htmlFor="inputZip" className="form-label">Choose file</label>
                    <input type="file" className="form-control" id="inputZip" onChange={handleImgUpload}/>
                </div>
                <div className="d-grid gap-2 ">
                    <button type="submit" className="btn btn-outline-primary" onClick={handleUpload}>Add this one</button>
                </div>
            </form>
        </section>
    )
}
