import React from 'react';
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, seller, price, stock, star, starCount } = props.data;
    return (
        <div className=''>
            <div className='row mb-3 py-2 border-bottom m-0'>
                <div className='col-lg-3'>
                    <img src={img} alt="" width='100%' />
                </div>
                <div className='col-lg-9'>
                    <h5 className='text-info'>{name}</h5>
                    <h6>By: <span className='text-primary text-decoration-underline'>{seller}</span> </h6>
                    <h4>Price: <span className='text-success'>{price}</span> </h4>
                    <p className='fw-bold'> only <span className='text-warning fw-bold'>{stock} left in stock </span> -order soon</p>
                    <p>Rating:
                        <Rating
                            emptySymbol='far fa-star text-warning'
                            fullSymbol='fas fa-star text-warning'
                            initialRating={star}
                            readonly
                        >
                        </Rating>
                        <span className='ps-4 fw-bold'>Total Star: <i className='fas fa-star text-warning'></i> x {starCount}</span>
                    </p>
                    <button className='btn btn-primary' onClick={() => { props.eventHandler(props.data) }}>
                        Add To Cart <i className="fas fa-shopping-cart ps-2"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;