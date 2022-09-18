import React, { useEffect, useState } from 'react';
import style from './Products.module.css';
import Cart from './Cart/Cart';
// import pdt from '../../../Data/products';
import ProductItem from './ProductItem/ProductItem';
import axios from 'axios';


export default function Products() {

    // const [total, setTotal] = useContext(UserContext);
    // console.log(total);

    const [PdItem, setPdItem] = useState([])
    // console.log(PdItem)
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://autorepair.herokuapp.com/product/get')
                setPdItem(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()

    }, [])

    const handleAddItem = (foodItem) => {
        // const {price} = foodItem.price
        // console.log('price',price)
        // console.log('food added to cart', foodItem)
        const newCart = [...cart, foodItem]
        setCart(newCart)
        // setTotal(newCart)

    }
    // DATA FETCH LOADER
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, [2000])
        return () => clearTimeout(timeout);
    })

    return (
        <div id="Products">
            <section className="mt-5 pt-5" id={style.Products}>
                <div className={style.titleText}>
                    <h2 className={style.title}>Our<span className={style.titleHalf}> Products</span></h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 mt-4">
                            <div className="row">
                                {
                                    loading ?
                                        <h4>Please wait...</h4>
                                        :
                                        PdItem.map((item) => (
                                            <ProductItem item={item} handleAddItem={handleAddItem} key={item._id} />
                                        ))
                                }
                            </div>
                        </div>
                        <div className="col-md-3 mt-5">
                            <Cart cart={cart} />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
