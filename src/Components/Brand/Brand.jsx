import React from 'react';

const Brand = () => {
    const handelAddBrand = e => {
        e.preventDefault();

        const form = e.target;

        const Brand = form.brandName.value;
        const Image = form.Image.value;


        const newBrand = { Brand, Image }

        console.log(newBrand);
    }
    return (
        <div className="bg-teal-100 glass p-24">
            <h2 className="text-3xl font-extrabold">Add Brand New Car</h2>
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
                <input type="submit" value="Add Data" className="btn btn-outline" />

            </form>
        </div>
    );
};

export default Brand;