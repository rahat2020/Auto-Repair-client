
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import style from './AllOrders.module.css';
import Swal from 'sweetalert2';

const AllOrders = () => {
  const { user, decodedTkn } = useContext(AuthContext)
  const [data, setDeta] = useState([])
  // console.log(data)
  // const [pd, setPd] = useState([])
  // console.log(pd)
  const [itmupdate, setUpdate] = useState(false)
  const [pdmupdate, setPdUpdate] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, [1000])
    return () => clearTimeout(timeout);
  })

  const config = {
    headers: { token: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
  }
  ///////// GET ORDERS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://angry-sweatpants-bear.cyclic.app/order/get', config)
        // console.log(res)
        setDeta(res.data)
        // setpdObject(res.data.PD)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  ///////// DELETE ORDERS
  const handleDeleteOrder = async (_id) => {
    try {
      const res = await axios.delete(`https://angry-sweatpants-bear.cyclic.app/order/delete/${_id}`)
      res && Swal.fire({
        icon: "success",
        title: "Order deleted successfully"
      })
      setTimeout(function () {
        res && window.location.reload();
      }, [1000])
      return () => clearTimeout(setTimeout());
    } catch (err) {
      console.log(err)
    }
  }

  ///////// UPDATE PRODUCTS ORDERS STATUS
  const [status, setStatus] = useState('')
  const [itmID, SetitemID] = useState('')
  // console.log(itmID)


  const handleStatusUpdate = async (e) => {
    e.preventDefault()
    const upStatusObj = {
      status,
    }
    console.log(upStatusObj)
    try {
      const res = await axios.put(`https://angry-sweatpants-bear.cyclic.app/order/update/${itmID}`, upStatusObj, config)
      res && Swal.fire({
        icon: "success",
        title: "Status Updated successfully"
      })
      setTimeout(function () {
        res && window.location.reload();
      }, [1000])
      return () => clearTimeout(setTimeout());
    } catch (err) {
      console.log(err)
    }
  }




  const handleUpdate = () => {
    setUpdate(true)

  }
  const handleUpdateClose = () => {
    setUpdate(false)

  }
  const handlePduUpdate = () => {
    setPdUpdate(true)
  }
  const handlePduClose = () => {
    setPdUpdate(false)
  }
  return (
    <>
      <div className="shadow border rounded" id={style.order__container}>
        <div className={style.titleText}>
          <h2 className={style.title}>Manage<span className={style.titleHalf}> All Orders</span>
            <hr />
          </h2>
        </div>
        <div className={style.ordered__user}>
          <div className={style.ol__left}>
            <p className={style.order__userData}>User name:</p>
            <p className={style.order__userData}>User Email:</p>
            <p className={style.order__userData}>User Image:</p>
            <p className={style.order__userData}>Role:</p>
          </div>
          <div className={style.ol__right}>
            <p className={style.olrght__data}>{user.username}</p>
            <p className={style.olrght__data}>{user.email}</p>
            <p className={style.olrght__data}>
              <img src={user.img} alt="user-img" className={style.olright__img} />
            </p>
            <p className={style.olrght__data}>{decodedTkn.isAdmin ? "Admin" : "null"}</p>
          </div>
        </div>
        <hr />

        {/*///////////////////////////////////////// SERVICE TAHT ORDERED //////////////////////////////////////////////*/}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h4 className="mt-3 text-muted fw-bold">Service Ordered List</h4>
          {
            pdmupdate ?
              <button onClick={handlePduClose} className={style.orderBtn__erase}>
                <FontAwesomeIcon icon={faEraser} />
              </button>
              :
              <button onClick={handlePduUpdate} className={style.orderBtn__edit}>
                <FontAwesomeIcon icon={faPen} />
              </button>
          }
        </div>
        <table className="table border table-hover">
          <thead>
            <tr>
              <th scope="col">S.N.</th>
              <th scope="col">User Name</th>
              <th scope="col">Service Name</th>
              <th scope="col">Service Price</th>
              <th scope="col">Service Image</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {
            data.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <th scope="row" className="text-muted fw-bold">1</th>
                  <td data-title="User Name" className="text-muted fw-bold">{item?.username}</td>
                  <td data-title="Service Name" className="text-muted fw-bold">{item?.pdName}</td>
                  <td data-title="Service Price" className="text-muted fw-bold">{item?.pdPrice}</td>
                  <td data-title="Service Image" >
                    <img src={item?.pdImg} alt="product-img" className="orderpd__img" />
                  </td>
                  {
                    pdmupdate ?
                      <td data-title="Service Price" className="text-muted fw-bold">
                        <select className="form-select"
                          id={style.formSelect}
                          aria-label="Default select example"
                          onChange={(e) => setStatus(e.target.value)}
                          onClick={() => SetitemID(item._id)}
                        >
                          <option value="pending">pending</option>
                          <option value="ongoing">ongoing</option>
                          <option value="done">done</option>
                        </select>
                      </td>
                      :
                      <td data-title="Service Price" className="text-muted fw-bold">
                        {item?.status}
                      </td>
                  }
                  <td data-title="Action">
                    {
                      item ?
                        <button className={style.orderBtn__delete} onClick={() => handleDeleteOrder(item._id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                        :
                        <button className={style.orderBtn__delete}>
                          Not ordered
                        </button>
                    }
                  </td>
                </tr>
              </tbody>
            ))
          }
        </table>

        {
          pdmupdate ?
            <button onClick={handleStatusUpdate} className="btn btn-primary">
              Update
            </button>
            :
            " "
        }




        {/*/////////////////////////////////////////// PRODUCT TAHT ORDERED ///////////////////////////////////*/}

        <div className="d-flex justify-content-between align-items-center mb-2">
          <h4 className="mt-3 text-muted fw-bold">Products Ordered List</h4>
          {
            itmupdate ?
              <button onClick={handleUpdateClose} className={style.orderBtn__erase}>
                <FontAwesomeIcon icon={faEraser} />
              </button>
              :
              <button onClick={handleUpdate} className={style.orderBtn__edit}>
                <FontAwesomeIcon icon={faPen} />
              </button>
          }
        </div>
        <table className="table border table-hover">
          <thead>
            <tr>
              <th scope="col">S.N.</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Image</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {
            data.map((item, index) => (
              item.PD.map((im, index) => (
                <tbody key={index}>
                  <tr >
                    <th scope="row" className="text-muted fw-bold" >1</th>
                    <td data-title="User Name" className="text-muted fw-bold">{im?.name}</td>
                    <td data-title="Product Price" className="text-muted fw-bold">{im?.price}</td>
                    <td data-title="Product Image" >
                      <img src={im?.img} alt="product-img" className={style.orderpd__img} />
                    </td>
                    {
                      itmupdate ?
                        <td data-title="Product Price" className="text-muted fw-bold">
                          <select className="form-select"
                            id={style.formSelect}
                            // onChange={(e) => setStatus(e.target.value)}
                            // onClick={()=>SetitemID(im._id)}
                            aria-label="Default select example">
                            <option value="pending">pending</option>
                            <option value="ongoing">ongoing</option>
                            <option value="done">done</option>
                          </select>
                        </td>
                        :
                        <td data-title="Status" className="text-muted fw-bold">
                          {item.status}
                        </td>
                    }

                    <td data-title="Action">
                      {
                        im ?
                          <button
                            className={style.orderBtn__delete}
                            onClick={() => handleDeleteOrder(im._id)}>
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                          :
                          <button className={style.orderBtn__delete}>
                            Not ordered
                          </button>
                      }
                    </td>
                  </tr>
                </tbody>
              ))
            ))
          }



        </table>

        {
          itmupdate ?
            <button className="btn btn-primary">
              Update
            </button>
            :
            " "
        }
      </div>
    </>
  )
}

export default AllOrders