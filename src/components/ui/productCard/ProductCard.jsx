import Image from 'next/image';
import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import Link from 'next/link';


const ProductCard = ({ product }) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <Image
                    alt='cover photo'
                    src={product?.photo}
                    width={200}
                    height={100} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product?.name}</h2>
                <div className='flex justify-between'>
                    <p>{product?.category}</p>
                    <p>Price:${product?.price}</p>
                    
                </div>
                <p>Rating: {product?.rating}</p>
                <div className="flex mt-5 gap-5 ">
                   <Link href={`/products/${product?.category}/details/${product._id}`}><button className="btn"><CgDetailsMore /></button></Link>
                    <Link href={`/products/${product?.category}/edit/${product._id}`}><button className="btn"><FaRegEdit /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;