import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
    const allService = useLoaderData()
    // console.log(allService);
    return (
        <div>
            <div className='bg-gray-200 p-10'>
                <h1 className=' text-2xl  font-semibold'>You Deserve The Better  </h1>
                <h1 className=' text-2xl font-semibold' > That's why we serve best </h1>
                <p className='font-normal text-4xl'>Take our services and be a happy client. There are different <br />kind of services take one without any confusion which one you need  </p>
            </div>
            <div className=' space-y-4 lg:grid place-content-center  items-center grid-cols-3 gap-5 p-5 '>
                {
                    allService.map((service) => (
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

export default Service;