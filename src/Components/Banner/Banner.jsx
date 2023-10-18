import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";

const Banner = () => {

    return (
        <div className='p-5 '>

            <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
                <div>
                    <img src={img1} className='h-screen rounded-2xl' alt="Image 1" />
                </div>
                <div>
                    <img src={img2} className='h-screen rounded-2xl' alt="Image 2" />
                </div>
                <div>
                    <img src={img3} className='h-screen rounded-2xl' alt="Image 3" />
                </div>
                <div>
                    <img src={img4} className='h-screen rounded-2xl' alt="Image 4" />
                </div>
                {/* Add more images as needed */}
            </Carousel>
        </div>
    );
};

export default Banner;