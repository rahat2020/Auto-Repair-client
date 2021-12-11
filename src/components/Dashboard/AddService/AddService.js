import axios from 'axios';
import React,{useState} from 'react';
import Swal from 'sweetalert2';
// import { useHistory } from 'react-router-dom';

export default function AddService() {
    const [service, setService] = useState({
        name:'',
        type:'',
        description:'',
        price:'',
        imgURL:'',
    })

    
    const handleBlur = event => {
        console.log(event.target.name, event.target.value) 
        const newData={...service}
        newData[event.target.name] = event.target.value;
        setService(newData)
    }

    const handleImgUpload = event => {
        console.log(event.target.files)
        const imgData = new FormData();
        imgData.set('key', '4736cf1b61e48463e33fb409001a3ac2');
        imgData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                const imgData = { ...service }
                imgData.imgURL = response.data.data.display_url
                setService(imgData)
                // setImgURL(response.data.data.display_url);
                // alert("Image has added to the server");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleUpload = event => {
          event.preventDefault(true);
          if (service.imgURL !== '') {
            // console.log(service)
            const url = `http://localhost:5000/addService`
            console.log(url)
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(service)
            })
            .then(response => {
                response.json()
                    .then((res) => {
                        if (response.status === 200) {
                            Swal.fire({
                                title: 'Hey yooo dude!',
                                text: 'Your have added new service!',
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
            <h3 className="d-flex justify-content-center align-content-center"> Add Service</h3>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">service name</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="name" name="name" onBlur={handleBlur}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">service type</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="type" name="type" onBlur={handleBlur}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">service details</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="write service details" name="description" onBlur={handleBlur}/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputCity" className="form-label">price</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="$1234" name="price" onBlur={handleBlur}/>
                </div>
                <div className="col-md-9">
                    <label htmlFor="inputZip" className="form-label">Chose file</label>
                    <input type="file" onChange={handleImgUpload} className="form-control" id="inputZip" />
                </div>
                <div className="d-grid gap-2 ">
                    <button type="submit" onClick={handleUpload} className="btn btn-outline-primary">Add this one</button>
                </div>
            </form>

        </section>
    )
}
