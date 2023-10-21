import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className='grid grid-cols-2 items-center p-5'>
            <div>
                <img src={data.Image} alt="" />
            </div>
            <div>
                <h1>{data.name}</h1>
                <p>{data.Description}</p>
                <p>{data.Price}</p>
            </div>

        </div>
    );
};

export default Details;