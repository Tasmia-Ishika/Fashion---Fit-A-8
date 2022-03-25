import React from 'react';

const Product = (props) => {
    const { name, img, company, about, price } = props.product;
    return (
        <div>
            <img src={img} alt="" />

        </div>
    );
};

export default Product;