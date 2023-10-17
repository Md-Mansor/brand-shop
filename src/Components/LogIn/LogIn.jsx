import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const handelSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        console.log(user);

    }
    return (
        <div>
            <div className="p-5">
                <div className=" flex flex-col items-center gap-10 ">
                    <div>
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <h1>have not any account then <Link to="/register" className='text-blue-700'>Register Here</Link></h1>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogIn;