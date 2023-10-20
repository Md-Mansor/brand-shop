import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Brand = () => {
    const handelAddBrand = e => {
        e.preventDefault();

        const form = e.target;

        const Brand = form.brandName.value;
        const Image = form.Image.value;


        const newBrand = { Brand, Image }

        console.log(newBrand);
        // send brand to server
        fetch('http://localhost:5000/brand', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newBrand)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Successfully Created Brand!')
                    form.reset();
                }
            })

    }
    return (
        <div className="bg-teal-100 glass p-24">
            <h2 className="text-3xl font-extrabold">Add New Brand</h2>
            <form onSubmit={handelAddBrand}>
                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandName" placeholder=" brandName" className="input input-bordered w-full" />
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
                <input type="submit" value="Add Brand" className="btn btn-outline" />

            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

        </div>
    );
};

export default Brand;