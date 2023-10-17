import React from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const handelClick = (e) => {
        e.preventDefault()
    }
    return (
        <div className='flex justify-around gap-5 bg-blue-300 glass items-center'>
            <div className='flex gap-5'>
                <Link to="/" className='font-medium text-lg'>Home</Link>
                <Link to="/feature" className='font-medium text-lg'>Features</Link>
                <Link to="/service" className='font-medium text-lg'>Service</Link>

            </div>
            <div>
                <img className='rounded-3xl w-52 ' src={logo} alt=" navbar image" />
            </div>
            <div className='flex gap-5 items-center'>
                <Link to="/addItem" className='font-medium text-lg'>Add Item</Link>
                <Link to="/cart" className='font-medium text-lg'>Cart</Link>
                <Link to="/login" >
                    <button className='btn btn-outline btn-error'>Log In</button>
                </Link>


            </div>
        </div>
    );
};

export default NavBar;