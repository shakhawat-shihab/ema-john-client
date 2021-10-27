import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';
    console.log('came from', location.state?.from);
    function handleGoogleLogin() {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectUrl);
            })
    }
    return (
        <div className='mt-5 pt-5'>
            <div className='text-center'>
                <h2>Log in</h2>
                <form action="" >
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Log in" />
                </form>
                <p>New to Amazon? <Link to='/regsiter'>Register</Link> </p>
                <p>-------------or,-------------</p>
                <button className='btn btn-warning text-white' onClick={handleGoogleLogin}>Goggle Sign In</button>
            </div>
        </div>
    );
};

export default Login;