import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from 'react-router-dom';


const Home = () => {
    const brand = useLoaderData()


    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data))


    }, [])

    return (
        <div>
            <Banner></Banner>
            <p className='text-red-500 text-xl bg-green-200'>
                <Marquee pauseOnHover={true} speed={150}>Deal With Us & Buy A brand new car and  Take Our Free Service for a limited time</Marquee>
            </p>
            <div className=' space-y-4 lg:grid place-content-center  items-center grid-cols-3 gap-5 p-5 '>
                {
                    services.map((service) => (
                        <div className=' '>
                            <div className="card bg-sky-200 shadow-xl">
                                <figure><img src={service.image} alt="brand logo" className='min-w-full h-96' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{service.type}</h2>
                                    <p>{service.title}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className=' lg:grid grid-cols-3 gap-5 py-10 '>
                {
                    brand.map((brand) => (
                        <div>
                            <Link to={`/brand/${brand.Brand}`}>
                                <div className="hover:bg-red-300 border rounded-2xl">
                                    <figure><img src={brand.Image} alt="brand logo" className=' p-10 mx-auto  ' /></figure>
                                    <div className="card-body">
                                        <h2 className="font-bold">{brand.Brand}</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Home;