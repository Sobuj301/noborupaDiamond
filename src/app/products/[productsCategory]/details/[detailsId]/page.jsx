import ButtonAddToCart from '@/components/action/ButtonAddToCart';
import { getSingleProduct } from '@/components/utils/getSingleProduct';
import PrivateRoute from '@/provider/PrivateRoute';
import Image from 'next/image';
import React from 'react';

const ProductDetails = async ({ params }) => {
    const { detailsId } = params
    const product = await getSingleProduct(detailsId)

    return (
        <PrivateRoute>
            <div className='max-w-4xl mx-auto'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <Image
                            alt='cover photo'
                            src={product?.photo}
                            width={400}
                            height={200} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product?.name}</h2>
                        <div className='flex mt-5 mb-5'>
                            <p>Category: {product?.category}</p>
                            <p>Price: {product?.price}</p>
                            <p>Rating: {product?.rating}</p>
                        </div>
                        <p>{product?.details}</p>
                        <div className="card-actions justify-end">
                           <ButtonAddToCart product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </PrivateRoute>
    );
};

export default ProductDetails;