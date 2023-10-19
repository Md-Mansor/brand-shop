import React from 'react';
import { Link } from 'react-router-dom';

const AddItem = () => {
    return (
        <div className=' gap-10 p-24 border w-fit mx-auto'>
            <div className='flex items-center  p-6 gap-6 '>
                <p className='font-bold text-lg'>Add Newly launch Brand </p>
                <Link to="/brand">
                    <button className='btn btn-outline'>Add Brand </button>
                </Link>
            </div>
            <div className='flex items-center p-6 gap-6'>
                <p className='font-bold text-lg'>Add Brand Item By Category</p>
                <Link to="/data">
                    <button className='btn btn-outline'>Add Item</button>
                </Link>
            </div>
            <div></div>
        </div>
    );
};

export default AddItem;