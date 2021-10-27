import React from 'react';
import './Search.css'
const Search = (props) => {
    return (
        <div className=''>
            <div className=' bg-search '>
                <form className="d-flex py-2 justify-content-center  ">
                    <input className="form-control me-2 input-design w-50 text-primary" type="search" placeholder="Search Products" aria-label="Search" onChange={props.eventHandler} />
                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                </form>
            </div>
        </div>
    );
};

export default Search;