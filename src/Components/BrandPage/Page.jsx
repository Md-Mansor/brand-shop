import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Page = () => {
    const { brandBrand } = useParams();
    // console.log(brandBrand);
    const loadData = useLoaderData();
    // console.log(loadData);

    const brandData = loadData.filter(product => product?.Brand?.toLowerCase() === brandBrand.toLowerCase());
    console.log(brandData);



    return (
        <div>
            {brandData.length > 0 ? (
                <div className='lg:grid grid-cols-2 gap-5 items-center my-5'>
                    {brandData.map((product, index) => (
                        <div className='  ' key={product._id}>
                            <div className="rounded-2xl bg-base-100 shadow-xl">
                                <img src={product.Image} alt="Shoes" className="rounded-s-2xl mx-auto h-96 w-3/5 py-4" />
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Name : {product.name}</h2>
                                    <div className="flex gap-5">
                                        <Link to={`/data/${product._id}`}>
                                            <button className="btn btn-outline btn-info">View Details And Price</button>
                                        </Link>
                                        <button className='btn btn-outline btn-accent'>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className='text-center font-bold text-5xl pt-5'>No Data found for this brand</p>
            )}
        </div>

    );
};

export default Page;