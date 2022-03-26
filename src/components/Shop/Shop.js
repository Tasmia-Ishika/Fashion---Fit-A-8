// Parent
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { BsFillStarFill } from "react-icons/bs";
import './Shop.css';
import Data from '../PickOne/Data';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [pickOne, setPickOne] = useState([]);



    // Choose any one button
    const arrayLength = cart.length;
    const pickRandomItem = () => {
        const selectRandomly = Math.floor(Math.random() * (arrayLength));
        const chooseItem = cart[selectRandomly]
        setPickOne(chooseItem);
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        if (newCart.length > 4) {
            alert("You can only choose 4 items.")
        }
        else {
            setCart(newCart);
        }

    }
    const resetCart = () => {
        setCart([]);
        setPickOne([]);

    }
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
                <div>

                    {
                        cart.map((item) => (<h3 key={item.id}><BsFillStarFill></BsFillStarFill> <img id='img-length' src={item.img} alt="" /> {item.name}</h3>))
                    }

                </div>
                <div>
                    <button className='btn-fix' onClick={() => pickRandomItem()}>Choose for Me</button>
                    <Data pickOne={pickOne}></Data>
                    <p><button className='btn-fix' onClick={() => resetCart()}>Reset Cart</button></p>
                </div>
            </div>

        </div>

    );
};

export default Shop;