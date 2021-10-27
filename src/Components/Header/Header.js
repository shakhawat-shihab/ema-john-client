import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';


const Header = (props) => {
    const { user, logOut } = useAuth();
    console.log('Logged in user ', user);
    const activeStyle = {
        fontWeight: 'bold',
        color: '#FF9800'
    };
    const color = {
        color: '#221F1F'
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
                <div className="container">
                    <Link to='/home'> <img src={logo} alt="" className='' width='130px' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                {/* <a className="nav-link active" aria-current="page" href="/shop">Shop</a> */}
                                <NavLink to='/home' activeStyle={activeStyle} className="nav-link fw-bold" style={color}  >Shop</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                {/* <a className="nav-link" href="/order-review">Order Review</a> */}
                                <NavLink to='/order-review' activeStyle={activeStyle} className="nav-link fw-bold" style={color}>Order Review</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                {/* <a className="nav-link" href="/inventory">Manage Inventory</a> */}
                                <NavLink to='/inventory' activeStyle={activeStyle} className="nav-link fw-bold" style={color}>Manage Inventory</NavLink>
                            </li>
                            {
                                user?.displayName
                                    ?
                                    <li className="nav-item px-3 d-flex">
                                        <span className='d-flex align-items-center px-2'> <img src={user.photoURL} alt="" width='40px' className='rounded-circle' /> </span>
                                        <NavLink to='/login' className="nav-link fw-bold" style={color} onClick={logOut}>Log Out</NavLink>
                                    </li>
                                    :
                                    <li className="nav-item px-2">
                                        {/* <a className="nav-link" href="/inventory">Manage Inventory</a> */}
                                        <NavLink to='/login' activeStyle={activeStyle} className="nav-link fw-bold" style={color}>Log in</NavLink>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        </div>

    );
};

export default Header;