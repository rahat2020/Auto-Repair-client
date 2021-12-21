import React, { useContext, useEffect, useState } from 'react';
import style from './Products.module.css';
import Typing from 'react-typing-animation';
import Cart from './Cart/Cart';
// import pdt from '../../../Data/products';
import ProductItem from './ProductItem/ProductItem';
import { UserContext } from '../../../App';


export default function Products() {

    const [total, setTotal] = useContext(UserContext);
    console.log(total);

    const [PdItem, setPdItem] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        // setPdItem(pdt)
        const url = 'http://localhost:5000/showProducts'
        fetch(url)
        .then(response => response.json())
        .then(data => setPdItem(data))
    }, [])

    const handleAddItem = (foodItem) => {

        console.log('food added to cart', foodItem)
        const newCart = [...cart, foodItem]
        setCart(newCart)
        setTotal(newCart)

    }
    return (
        <section className="mt-5 pt-5" id={style.Products}>

            <Typing speed={400}>
                <div className={style.titleText}>
                    <h2 className={style.title}>Our<span className={style.titleHalf}> Products</span></h2>
                </div>
            </Typing>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 mt-5">
                        <div className="row">
                                {
                                    PdItem.slice(0, 8).map((item) => (
                                        <ProductItem item={item} handleAddItem={handleAddItem} />
                                    ))
                                }
                        </div>
                    </div>
                    <div className="col-md-3 mt-5">
                        <Cart cart={cart}/>
                    </div>
                </div>
            </div>

        </section>

    )
}
