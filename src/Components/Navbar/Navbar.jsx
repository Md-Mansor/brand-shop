import React from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const handelClick = (e) => {
        e.preventDefault()
    }
    return (



        <div className="navbar flex justify-around items-center bg-blue-300 glass">
            <div className='flex gap-5'>
                <Link to="/" className='font-medium text-lg'>Home</Link>
                <Link to="/addItem" className='font-medium text-lg'>Add Item</Link>
            </div>
            <div>
                <img className='navbar-center rounded-3xl w-52 hidden lg:block ' src={logo} alt=" navbar image" />
            </div>
            <div className=" gap-5">
                <Link to="/cart" className="btn btn-primary btn-block  font-medium text-lg">
                    View cart
                </Link>
                <Link to="/login" >
                    <button className='btn btn-outline btn-error'>Log In</button>
                </Link>
            </div>
        </div >
    );
};

export default NavBar;