import React from 'react';
import Rating from 'react-rating';

const ReviewItem = (props) => {
    const { name, seller, price, stock, star, starCount, count } = props.data;
    return (
        <div>
            <div className='row mb-3 py-2 border-bottom m-0'>
                <h5 className='text-info'>{name}</h5>
                <div className='col-lg-6'>
                    <h6>By: <span className='text-primary text-decoration-underline'>{seller}</span> </h6>
                    <h4>Price: <span className='text-success'>{price}</span> </h4>
                    <p className='fw-bold mb-2'> only <span className='text-warning fw-bold'>{stock} left in stock </span> -order soon</p>
                    <p className='text-primary mb-3 fw-bold'>
                        Quantity: {count} Pcs.
                    </p>
                    <button className='btn btn-warning' onClick={() => { props.eventHandler(props.data.key) }}>
                        Remove From Cart <i className="fas fa-trash-alt ps-2"></i>
                    </button>
                </div>
                <div className='col-lg-6'>
                    <h2>Right side</h2>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;