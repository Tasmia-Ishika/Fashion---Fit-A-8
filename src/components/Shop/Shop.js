// Parent
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { BsFillStarFill } from "react-icons/bs";
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    }

    // Choose any one button
    const chooseItem = () => {
        console.log('going to fuck')
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);



    return (
        <div className='parent-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <h4>Selected Items</h4>
                <p>
                    {
                        cart.map((item) => (<h3 key={item.id}><BsFillStarFill></BsFillStarFill> <img id='img-length' src={item.img} alt=""/> {item.name}</h3>))}
                </p>

                <div>
                    <p><button onClick={() => chooseItem()}>Pick One</button></p>
                    <p> <button>Reset</button></p>
                </div>

            </div>

        </div>

    );
};

export default Shop;