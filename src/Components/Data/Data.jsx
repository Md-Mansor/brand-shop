import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Data = () => {
    const handelAddData = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.Name.value;
        const Price = form.Price.value;
        const Brand = form.Brand.value;
        const Description = form.Description.value;
        const Image = form.Image.value;

        const newItem = { name, Price, Brand, Description, Image }

        console.log(newItem);
        // send data to server
        fetch('http://localhost:5000/data', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Successfully Added Product')
                }
            })
    }

    return (

        <div className="bg-teal-50 p-24">
            <h2 className="text-3xl font-extrabold">Add Brand New Car</h2>
            <form onSubmit={handelAddData}>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Name" placeholder=" Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className='input-group'></label>
                        <select name="Brand" className="input input-bordered w-full">
                            <option disabled selected >Brand Name</option>
                            <option>BMW</option>
                            <option>Toyota</option>
                            <option>Mercedes</option>
                            <option>Tesla</option>
                            <option>Honda</option>
                            <option>Rolls-Royce</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Description" placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Image" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Data" className="btn btn-block" />

            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Data;