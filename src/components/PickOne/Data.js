import React from 'react';

import './Data.css'

const Data = (props) => {

    const { pickOne } = props;
    const { img, name, price } = pickOne;
    return (
        <div className='showing-item'>
            <h3>Chosen Item:</h3>
            <img src={img} alt="" />
            <p className='name-fix'> {price}</p>
            <p className='name-fix'> {name}</p>

        </div>
    );
};

export default Data;