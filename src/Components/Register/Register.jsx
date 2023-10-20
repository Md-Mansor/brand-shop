import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';



const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, SetRegisterError] = useState('');
    const [success, setSuccess] = useState('')


    const handelRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        SetRegisterError('')
        setSuccess('')


        console.log(name, email, password);


        if (password.length < 6) {
            toast.error('password must be at least 6 character')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('at least one uppercase letter')
            return;
        }
        else if (!/[#?!@$%^&*-]/.test(password)) {
            toast.error('give at least one special character')
            return;
        }

        createUser(email, password)
            .then(result => {
                toast.success('user created')
            })
            .catch(error => {
                toast.error('user exist')

            })
    }

    return (
        <div className="p-5">
            <div className="flex flex-col items-center gap-10">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register Here</h1>
                </div>
                <div className="card   flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" name='name' required />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <h1>Already Have An Account <Link to="/login" className='text-blue-700'>Log In</Link></h1>
                    </form>
                    <p>{success}</p>
                    <p>{registerError}</p>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Register;