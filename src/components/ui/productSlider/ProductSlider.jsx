import Image from 'next/image';
import React from 'react';
import slider1 from "../../../../public/image/s1.jpg"
import slider2 from "../../../../public/image/s2.jpg"
import slider3 from "../../../../public/image/s3.jpg"
import slider4 from "../../../../public/image/s4.jpg"

const ProductSlider = () => {

    return (
        <div>
            <div className="carousel w-full h-[350px]">
                <div id="item1" className="carousel-item w-full">
                <Image  alt='cover photo' src={slider1} width={1000} height={400} />
                </div>
                <div id="item2" className="carousel-item w-full">
                <Image  alt='cover photo' src={slider2} width={1000} height={400} />
                </div>
                <div id="item3" className="carousel-item w-full">
                <Image  alt='cover photo' src={slider3} width={1000} height={400} />
                </div>
                <div id="item4" className="carousel-item w-full">
                <Image  alt='cover photo' src={slider4} width={1000} height={400} />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default ProductSlider;