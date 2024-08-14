'use client'
import React, { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from "react-icons/bs";

const ToggleDark = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(()=>{
        const theme = localStorage.getItem('theme')

        if(theme === "dark"){
            setIsDarkMode(true)
        }
    },[])

    useEffect(()=>{
        if(isDarkMode){
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme','dark')
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light') 
        }
    },[isDarkMode])
    return (
        <div
        onClick={()=>setIsDarkMode(!isDarkMode)}
        className="">

           <BsSunFill className='absolute ml-20 md:ml-3' />
            
        </div>

        // relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1 px-3

        // absolute bg-white  w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
    );
};

export default ToggleDark;