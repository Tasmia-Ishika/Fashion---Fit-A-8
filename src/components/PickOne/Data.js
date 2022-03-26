import React from 'react';
import './Data.css'

const Data = (props) => {
    console.log(props);
    const { pickOne } = props;
    const { img, name } = pickOne;
    return (
        <div className='showing-item'>
            <h3>Chosen Item:</h3>
            <img src={img} alt="" />
            <p>Item : {name}</p>

        </div>
    );
};

export default Data;