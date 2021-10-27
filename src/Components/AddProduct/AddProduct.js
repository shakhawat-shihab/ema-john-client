import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    function onSubmit(data) {
        console.log(data);
        fetch('https://ema-john-server-shs.herokuapp.com/addProduct', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                reset();
            })

    }
    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto text-center'>
                <input {...register("name", { required: true, maxLength: 150 })} placeholder='Product Name' />
                <br />
                <input {...register("seller", { required: true, maxLength: 60 })} placeholder='Seller Name' />
                <br />
                <input {...register("img", { required: true })} placeholder='Image url' />
                <br />
                <input type="number" step="0.01" {...register("price", { required: true })} placeholder='Product Price' />
                <br />
                <input type="number" step="0.01" {...register("shipping", { required: true })} placeholder='Product Shipping' />
                <br />
                <input type="number" {...register("star", { required: true, min: 0, max: 5 })} placeholder='Star' />
                <br />
                <input type="number" {...register("starCount")} placeholder='Total Star' />
                <br />
                <input type="submit" value="Save Product" />
            </form>
        </div>
    );
};

export default AddProduct;