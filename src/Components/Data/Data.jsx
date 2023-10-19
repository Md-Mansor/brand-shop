import React from 'react';

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
    }

    return (

        <div className="bg-teal-50 p-24">
            <h2 className="text-3xl font-extrabold">Add Brand New Car</h2>
            <form onSubmit={handelAddData}>
                {/* form name and quantity row */}
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
        </div>
    );
};

export default Data;