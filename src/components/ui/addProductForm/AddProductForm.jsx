'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const AddProductForm = () => {
    const categories = ["Skincare","Makeup","LipCare","EyeMakeup","Haircare","NailCare"]

    const router = useRouter()

    const [name, setName] = useState()
    const [category, setCategory] = useState()
    const [price, setPrice] = useState()
    const [rating, setRating] = useState()
    const [details, setDetails] = useState()
    const [photo, setPhoto] = useState()

    const product = { name, category, price, rating, details, photo }

    const handleAddProduct = async (e) => {
        e.preventDefault()
        
        try {
            const res = await fetch('http://localhost:5000/products', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(product)
            })

            if (res.ok) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Product Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                router.push('/')
                router.refresh()
            } else {
                throw new Error('Product Added fail')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleAddProduct}>
                <div className="md:flex gap-3" >
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Product Name</span>
                        </div>
                        <input
                            onChange={(e) => { setName(e.target.value) }}
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            className="input input-bordered  md:w-full" required />
                    </label>

                    
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <div className="main">
                            <input
                            required 
                            className="input input-bordered  md:w-full" 
                            onChange={(e)=>setCategory(e.target.value)}
                            placeholder="category"
                            list="data" />
                            <datalist id="data">
                                {
                                    categories.map((op)=><option key={op}> {op}</option>)
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
                        required
                            onChange={(e) => { setPhoto(e.target.value) }}
                            type="text"
                            name="name"
                            placeholder="Photo Url"
                            className="input input-bordered  md:w-full" />
                    </label>
                </div>

                <button type="submit" className="btn btn-block mt-8">Add Product</button>
            </form>
        </div>
    );
};

export default AddProductForm;