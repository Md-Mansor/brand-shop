import React from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const handelClick = (e) => {
        e.preventDefault()
    }
    return (



        <div className="navbar flex justify-around  bg-blue-300 glass">
            <div className="  gap-5 items-center">
                <div className='flex gap-5'>
                    <Link to="/" className='font-medium text-lg'>Home</Link>
                    <Link to="/feature" className='font-medium text-lg'>Features</Link>
                    <Link to="/service" className='font-medium text-lg'>Service</Link>
                </div>


            </div>
            <div>
                <img className='navbar-center rounded-3xl w-52 ' src={logo} alt=" navbar image" />
            </div>
            <div className="flex gap-5">
                <Link to="/addItem" className='font-medium text-lg'>Add Item</Link>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <Link to="/cart" className="btn btn-primary btn-block  font-medium text-lg">
                                    View cart
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <Link to="/login" >
                        <button className='btn btn-outline btn-error'>Log In</button>
                    </Link>
                    <div className='hidden'>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >













        // <div className='flex justify-around gap-5 bg-blue-300 glass items-center'>
        //     <div className='flex gap-5'>
        //         <Link to="/" className='font-medium text-lg'>Home</Link>
        //         <Link to="/feature" className='font-medium text-lg'>Features</Link>
        //         <Link to="/service" className='font-medium text-lg'>Service</Link>

        //     </div>
        // <div>
        //     <img className='rounded-3xl w-52 ' src={logo} alt=" navbar image" />
        // </div>
        //     <div className='flex gap-5 items-center'>
        //         <Link to="/addItem" className='font-medium text-lg'>Add Item</Link>
        //         <Link to="/cart" className='font-medium text-lg'>Cart</Link>
        // <Link to="/login" >
        //     <button className='btn btn-outline btn-error'>Log In</button>
        // </Link>


        //     </div>
        // </div>
    );
};

export default NavBar;