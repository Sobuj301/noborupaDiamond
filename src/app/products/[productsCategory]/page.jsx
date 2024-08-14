import ProductCard from '@/components/ui/productCard/ProductCard';
import ProductSlider from '@/components/ui/productSlider/ProductSlider';
import { getProducts } from '@/components/utils/getProducts';
import PrivateRoute from '@/provider/PrivateRoute';
import Image from 'next/image';
import React from 'react';


const DetailsProduct = async ({ params }) => {
    const category = params.productsCategory
    const products = await getProducts(category)



    return (
         <div className='max-w-5xl mx-auto'>
            <ProductSlider products={products} />
            <div className='grid md:grid-cols-2 mt-10 gap-5'>
                {
                    products.map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>

        </div>
    );
};

export default DetailsProduct;