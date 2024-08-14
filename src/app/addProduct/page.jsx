import AddProductForm from '@/components/ui/addProductForm/AddProductForm';
import PrivateRoute from '@/provider/PrivateRoute';
import React from 'react';

const AddProduct = () => {
    return (
        <PrivateRoute>
            <div className='max-w-3xl bg-slate-300 mx-auto rounded-lg p-10'>
            <h2 className='text-2xl font-semibold text-center mb-5'>Add New Product</h2>
            <AddProductForm />
        </div>
        </PrivateRoute>
    );
};

export default AddProduct;