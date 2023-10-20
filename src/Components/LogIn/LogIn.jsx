import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../FireBase/FireBase.config';



const LogIn = () => {
    const { logIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();

    const [existUser, setExistUser] = useState()


    const auth = getAuth(app)
    const handelGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('login successfully')
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }


    const handelSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('login successfully')
            })
            .catch(error => {
                console.error(error);
            })


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
                                <button onClick={handelSignIn} className="btn btn-primary">Login</button>
                            </div>
                            <h1>have not any account then <Link to="/register" className='text-blue-700'>Register Here</Link></h1>

                        </form>
                        <div>
                            <p className="text-center p-4">Or Log In With google</p>
                            <button onClick={handelGoogleSignIn} className="btn btn-outline btn-info">Google</button>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default LogIn;