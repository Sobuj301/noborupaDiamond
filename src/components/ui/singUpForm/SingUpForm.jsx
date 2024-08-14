'use client'
import { AuthContext } from '@/provider/AuthProvider';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';

const SingUpForm = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const {createUser} = useContext(AuthContext)

    const handleSingUp = e =>{
        e.preventDefault()

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            if(result.user){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "User SingUp Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
         
        })
        .catch(error =>{
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'Error (auth/email-already-in-use)',
                
              });
        })
 
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5">SingUp now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSingUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                            onChange={(e)=>setName(e.target.value)}
                             type="text"
                              placeholder="name"
                               className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                              onChange={(e)=>setEmail(e.target.value)}
                             type="email" 
                             placeholder="email" 
                             className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                              onChange={(e)=>setPassword(e.target.value)}
                            type="password" 
                            placeholder="password" 
                            className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">SingUp</button>
                        </div>
                    </form>
                    <span className='text-center mb-5'> Already have account? please <Link className='underline text-blue-600' href="/login"> Login </Link></span>
                </div>
            </div>
        </div>
    );
};

export default SingUpForm;