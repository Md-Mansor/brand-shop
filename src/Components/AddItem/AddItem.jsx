import React from 'react';

const AddItem = () => {
    return (
        <div>
            <form>
                <div className=''>
                    <h1>Name</h1>
                    <input type="text" placeholder="email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <h1>Image</h1>
                    <input type="text" placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <h1>Select Brand</h1>
                    <div className=" w-full max-w-xs">
                        <select className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option> BMW</option>
                            <option>Toyota</option>
                            <option>Ferrari</option>
                            <option>Honda</option>
                            <option>Tesla</option>
                        </select>
                    </div>

                </div>
            </form>

        </div>
    );
};

export default AddItem;