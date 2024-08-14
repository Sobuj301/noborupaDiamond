import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryCard = ({ category }) => {

    // const {_id,name,category,price,rating,details,photo} = category

    return (
        <Link href={`/products/${category?.category}`}>
            <div className="card bg-base-100  shadow-xl">
                <figure className="px-10 pt-10">
                    <Image
                        style={{ width: '100%', height: 'auto' }}
                        alt='cover photo'
                        src={category?.photo}
                        width={1000}
                        height={400} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{category?.name}</h2>
                    <p>{category?.category}</p>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;