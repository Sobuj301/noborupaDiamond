"use client"
import RemoveCart from '@/components/action/RemoveCart';
import { AuthContext } from '@/provider/AuthProvider';
import PrivateRoute from '@/provider/PrivateRoute';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import Swal from 'sweetalert2';


const MyCart = () => {
    const [carts,setCarts] = useState([])
    const {user} = useContext(AuthContext)
    const email = user?.email
    const router = useRouter()
    const totalPrice = carts.reduce((accumulator,cart) =>{
        return accumulator + Number(cart.price)
    },0)

    const updatePrice = parseInt(totalPrice)
  
    

    
    useEffect(() =>{
        fetch(`http://localhost:5000/cart/${email}`,{
            cache:"no-cache"
        })
        .then(res =>res.json())
        .then(data =>setCarts(data))
    },[carts])
     
    return (
        <PrivateRoute>

            <div className='max-w-3xl mx-auto'>
                <div className='flex justify-between'>
                <h2 className='mb-5 text-xl  font-semibold'>Total Carts : {carts?.length}</h2>
                <p className='text-xl font-semibold'>Total Price : {updatePrice}</p>
                </div>
                <div className=' flex flex-col gap-8'>

                    {
                        carts.map(cart => <div key={cart._id} className="card bg-neutral text-neutral-content ">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-green-400 underline">{cart?.email}</h2>
                                <p>{cart?.details}</p>
                                <p>{cart?.name}</p>
                                <p>{cart.price}</p>
                                <div className="card-actions justify-between gap-24 mt-10">
                                    <Link href="/"> <button><IoMdArrowRoundBack color='green' size={20} /></button></Link>
                                    <RemoveCart id={cart?._id} />

                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </PrivateRoute>
    );
};

export default MyCart;