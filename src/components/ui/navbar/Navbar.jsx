'use client'
import { LuSunMoon } from "react-icons/lu";
import { AuthContext } from '@/provider/AuthProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import ToggleDark from "../toggleMode/ToggleDark";
import DropDown from "../dropDown/DropDown";

const Navbar = () => {
    
    const { user, logout } = useContext(AuthContext)

    const navLinks = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Add-Product",
            path: "/addProduct"
        },
        {
            name: "My-Cart",
            path: "/myCart"
        },
       
    ]
   

    

    const pathName = usePathname()
    return (
        <div className="navbar fixed z-50 opacity-100 dark:bg-sky-500 text-black rounded-b-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2 text-black">
                        {
                            navLinks.map((link, index) => {
                                const isActive = pathName === link.path;
                                return <Link className={isActive ? "underline text-black" : ""} href={link.path} key={index}>{link.name}</Link>
                            })
                        }
                    </ul>

                </div>
                <Link href="/" className="btn btn-ghost text-xl">Noborupa-Diamond</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {
                        navLinks.map((link, index) => {
                            const isActive = pathName === link.path;
                            return <Link className={isActive ? "underline text-blue-950" : ""} href={link.path} key={index}>{link.name}</Link>
                        })
                    }
                </ul>
            </div>
            <ToggleDark />
            <div className="navbar-end">
                {
                    user?.email ? <>
                        <DropDown />
                        {/* <button onClick={handleLogout} className='btn btn-sm'>Logout</button> */}
                    </> : <Link href="/login"><button className='btn'>Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;