import EditForm from '@/components/ui/editForm/EditForm';
import { getSingleProduct } from '@/components/utils/getSingleProduct';
import PrivateRoute from '@/provider/PrivateRoute';
import React from 'react';

const EditProduct = async ({ params }) => {
    const { editId } = params
    const oldProduct = await getSingleProduct(editId)

    return (
        <PrivateRoute>
            <div className='max-w-3xl bg-slate-300 mx-auto rounded-lg p-10'>
                <h1 className='text-2xl font-semibold text-center mb-5'>Edit Product</h1>
                <EditForm oldProduct={oldProduct} />

            </div>
        </PrivateRoute>
    );
};

export default EditProduct;