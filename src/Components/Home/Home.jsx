import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const services = useLoaderData()

    return (
        <div>
            <Banner></Banner>


            <div className=' space-y-4 lg:grid place-content-center  items-center grid-cols-3 gap-5 p-5 '>
                {
                    services.map((service) => (
                        <div className=' '>
                            <div className="card bg-sky-200 shadow-xl">
                                <figure><img src={service.image} alt="Shoes" className='min-w-full h-96' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{service.type}</h2>
                                    <p>{service.title}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;