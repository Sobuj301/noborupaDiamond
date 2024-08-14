'use client'
import { AuthContext } from '@/provider/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';

const LoginForm = () => {
    const router = useRouter()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login} = useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault()

        login(email,password)
        .then(result =>{
            if(result?.user){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "User Logged",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  router.push('/')
            }
        })
        .catch(error =>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: {error},
                
              });
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                      
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
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                     <span className='text-center mb-5'> Are U New? please <Link className='text-blue-600 underline' href="/singUp"> SingUp </Link></span>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;