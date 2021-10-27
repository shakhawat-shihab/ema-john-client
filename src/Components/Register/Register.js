import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='mt-5 pt-5'>
            <div className='text-center'>
                <h2>Register : Create Your Account</h2>
                <form >
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Reenter Your Password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already Have an Account? <Link to='/login'>Log in</Link> </p>
                <p>-------------or,-------------</p>
                <button className='btn btn-warning text-white' onClick={signInUsingGoogle}>Goggle Sign In</button>
            </div>
        </div>
    );
};

export default Register;