import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { clearTheDd, getDataFromDb } from "../../dB";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import './Shipping.css';
const Shipping = () => {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const userCart = getDataFromDb();
        data.order = userCart;
        console.log(data);
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    clearTheDd();
                    reset();
                    alert('Order placed successfully');
                    history.push('/home')
                }
            })

    }
    const { user } = useAuth();
    return (
        <div className='mt-5 pt-4 text-center'>
            <h2>This is shipping</h2>
            {/* handleSubmit will validate your inputs before invoking "onSubmit  */}
            <form onSubmit={handleSubmit(onSubmit)} className='p-3' >
                <input defaultValue={user.displayName} {...register("name")} placeholder="Enter Name" />
                <br />
                <input defaultValue={user.email}  {...register("email", { required: true })} placeholder="Enter Email" />
                <br />
                {errors.email && <span>This field is required</span>}
                <br />
                <input defaultValue="" {...register("address", { required: true })} placeholder="Enter Address" />
                <br />
                <input defaultValue="" {...register("city", { required: true })} placeholder="Enter City" />
                <br />
                <input defaultValue="" {...register("phone", { required: true })} placeholder="Enter Phone" />
                <br />
                <input type="submit" value='submit' />
            </form>
        </div >
    );
};

export default Shipping;