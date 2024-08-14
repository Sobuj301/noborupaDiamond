"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const EditForm = ({oldProduct}) => {
    
    const router = useRouter()
   
    const [name, setName] = useState(oldProduct?.name)
    const [category, setCategory] = useState(oldProduct?.category)
    const [price, setPrice] = useState(oldProduct?.price)
    const [rating, setRating] = useState(oldProduct?.rating)
    const [details, setDetails] = useState(oldProduct?.details)
    const [photo, setPhoto] = useState(oldProduct?.photo)

    const updateProduct = {name,category,price,rating,details,photo}
    const categories = ["Skincare","Makeup","LipCare","EyeMakeup","Haircare","NailCare"]

    const handleEditProduct = async(e) => {
        e.preventDefault()
        try {
            const res = await fetch(`http://localhost:5000/products/${oldProduct._id}`,{
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(updateProduct)
            })
            if(res.ok){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Product Updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  router.push('/')
                  router.refresh()

            }
            else{
                throw new Error('update failed')
            }
        } catch (error) {
            console.log(error)
        }


    }
    return (
        <div >
            <form onSubmit={handleEditProduct}>
                <div className="md:flex gap-3" >
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Product Name</span>
                        </div>
                        <input
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            type="text"
                            name="name"
                           
                            className="input input-bordered  md:w-full" required />
                    </label>


                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <div className="main">
                            <input
                            value={category}
                                required
                                className="input input-bordered  md:w-full"
                                onChange={(e) => setCategory(e.target.value)}
                                placeholder="category"
                                list="data" />
                            <datalist id="data">
                                {
                                    categories.map((op) => <option key={op}> {op}</option>)
                                }
                            </datalist>
                        </div>

                    </label>
                </div>
                <div className="md:flex gap-3" >
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Price</span>
                        </div>
                        <input
                        value={price}
                            required
                            onChange={(e) => { setPrice(e.target.value) }}
                            type="number"
                            name="name"
                            placeholder="Price"
                            className="input input-bordered  md:w-full" />
                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Rating</span>
                        </div>
                        <input
                        value={rating}
                            required
                            onChange={(e) => { setRating(e.target.value) }}
                            type="number"
                            name="name"
                            placeholder="Rating"
                            className="input input-bordered  md:w-full" />
                    </label>
                </div>
                <div className="md:flex gap-3" >
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input
                        value={details}
                            required
                            onChange={(e) => { setDetails(e.target.value) }}
                            type="text"
                            name="name"
                            placeholder="Details"
                            className="input input-bordered  md:w-full" />
                    </label>
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Photo</span>
                        </div>
                        <input
                        value={photo}
                            required
                            onChange={(e) => { setPhoto(e.target.value) }}
                            type="text"
                            name="name"
                            placeholder="Photo Url"
                            className="input input-bordered  md:w-full" />
                    </label>
                </div>

                <button type="submit" className="btn btn-block mt-8">Update Product</button>
            </form>
        </div>
    );
};

export default EditForm;