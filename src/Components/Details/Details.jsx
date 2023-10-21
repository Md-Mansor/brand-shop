import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className='grid grid-cols-2  gap-4 bg-cyan-50 p-5'>
            <div>
                <img src={data.Image} alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-semibold py-3'>{data.name}</h1>
                <p className='text-lg font-medium'>{data.Description}</p>
                <p className='btn btn-outline btn-accent'>{data.Price}</p>
            </div>

        </div>
    );
};

export default Details;