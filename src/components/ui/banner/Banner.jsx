import Image from 'next/image';
import React from 'react';

import cover1 from "../../../../public/image/cover-1.jpg"
import cover2 from "../../../../public/image/cover-2.jpg"
import cover3 from "../../../../public/image/cover-3.jpg"
import cover4 from "../../../../public/image/cover-4.jpg"
import cover5 from "../../../../public/image/cover-5.jpg"

const Banner = () => {
    
    return (
        <div className="carousel w-full h-svh">
            <div id="slide1" className="carousel-item relative w-full">
                <Image  alt='cover photo' src={cover1} width={1000} height={400} />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <Image style={{ width: '100%', height: 'auto' }}  alt='cover photo' src={cover2} width={1000} height={400} />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <Image style={{ width: '100%', height: 'auto' }}  alt='cover photo' src={cover3} width={1000} height={400} />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <Image style={{ width: '100%', height: 'auto' }}  alt='cover photo' src={cover4} width={1000} height={400} />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;