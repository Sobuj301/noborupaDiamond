'use client'
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { useRouter } from 'next/navigation';

const PrivateRoute = ({children}) => {

    const router = useRouter()
    const {user,loading} = useContext(AuthContext)


    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    if(!user?.email){
        router.push('/login')
        return null
    }
    return children
};

export default PrivateRoute;