import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        // <div className='text-center'>
        //     <img src={logo} alt="" className='header-img' />
        // </div>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container">
                    <a className="navbar-brand" href="/"> <img src={logo} alt="" className='' width='130px' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <a className="nav-link active" aria-current="page" href="/shop">Shop</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="/order-review">Order Review</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="/manage-inventory">Manage Inventory</a>
                            </li>
                        </ul>
                        <form className="d-flex ms-3">
                            <input className="form-control me-2 input-design" type="search" placeholder="Search Products" aria-label="Search" />
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    </div>
                </div>
            </nav>

        </div>

    );
};

export default Header;