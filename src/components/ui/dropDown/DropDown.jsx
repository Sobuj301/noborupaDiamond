"use client"
import { AuthContext } from '@/provider/AuthProvider';
import React, { useContext } from 'react';
import { AiOutlineLogout } from "react-icons/ai";

const DropDown = () => {

    const {logout} = useContext(AuthContext)
    const handleLogout = () => {
        logout()
    }
    return (
        <div className="dropdown dropdown-hover md:dropdown-left">
            <div tabIndex={0} role="button" className="btn m-1 text-sm"><AiOutlineLogout size={18}  /></div>
            <ul tabIndex={0} className="dropdown-content bg-slate-100 menu text-black rounded-box z-[1] w-24 space-y-3 p-2 shadow">
                <li>Profile</li>
                <li>Setting</li>
                <li> <button onClick={handleLogout}>Logout</button></li>
               
            </ul>
        </div>
    );
};

export default DropDown;