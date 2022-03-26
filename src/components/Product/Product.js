// Child
import React from 'react';
import './Product.css';
import { RiShoppingCartFill } from "react-icons/ri";

const Product = (props) => {
    const {handleAddToCart, product} = props;
    const { name, img, company, about, price } = product;
    


    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <div className='product-details'>
                <p><small>{about}</small></p>
                <p><small> By {company}</small></p>
                <h3> {price}</h3>
            </div>
            <button onClick={() => handleAddToCart(product)}  className='cart-btn'>
                <p> Add to Cart <RiShoppingCartFill></RiShoppingCartFill></p>
            </button>
        </div>
    );
};

export default Product;