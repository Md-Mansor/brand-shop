import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Page = () => {
    const { brandBrand } = useParams();
    // console.log(brandBrand);
    const loadData = useLoaderData();
    // console.log(loadData);

    const brandData = loadData.filter(product => product?.Brand?.toLowerCase() === brandBrand.toLowerCase());
    console.log(brandData);



    return (
        <div>
            <p>data will load here</p>
            {brandData.map((product, index) => (
                <div key={index}>
                    <p>Name: {product.name}</p>
                    <p>Price: {product.Price}</p>
                    {/* Add more properties as needed */}
                </div>
            ))}
        </div>
    );
};

export default Page;