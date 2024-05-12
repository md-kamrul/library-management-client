import Swal from 'sweetalert2'

const AddBooks = () => {

    document.title = "NSU Library - Add Books"

    const handleAddList = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const image = form.image.value;
        const shortDescription = form.shortDescription.value;
        const touristSpot = form.touristSpot.value;
        const country = form.country.value;
        const location = form.location.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorPerYear = form.totalVisitorPerYear.value;

        const addList = { email, image, shortDescription, touristSpot, country, location, averageCost, seasonality, travelTime, totalVisitorPerYear };

        console.log(addList);
    }

    return (
        <div>
            <div className="w-[80%] mx-auto">

                <div className=" mt-10 py-24 text-[#212121]">
                    <h2 className="text-center text-4xl text-[#3F51B5] mb-10 font-bold">Add Tourist List</h2>

                    <form onSubmit={handleAddList} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Enter Your Email Address</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email Address" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Image</span>
                            </label>
                            <input type="text" placeholder="Image Link" className="input input-bordered" name="image" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Tourist Spot</span>
                            </label>
                            <input type="text" placeholder="Tourist Spot" className="input input-bordered" name="touristSpot" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Country</span>
                            </label>
                            <input type="text" placeholder="Country" className="input input-bordered" name="country" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Location</span>
                            </label>
                            <input type="text" placeholder="Location" className="input input-bordered" name="location" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Short Description</span>
                            </label>
                            <input type="text" placeholder="Short Description" className="input input-bordered" name="shortDescription" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Average Cost</span>
                            </label>
                            <input type="number" placeholder="Average Cost" className="input input-bordered" name="averageCost" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Seasonality</span>
                            </label>
                            <input type="text" placeholder="Seasonality (Example: Summer, Winter)" className="input input-bordered" name="seasonality" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Travel Time</span>
                            </label>
                            <input type="number" placeholder="Travel Time (in days)" className="input input-bordered" name="travelTime" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Total Visitor Per Year</span>
                            </label>
                            <input type="number" placeholder="Total Visitor Per Year" className="input input-bordered" name="totalVisitorPerYear" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#f8fbff] border border-[#f8fbff] text-[#000e25] hover:text-[#212121] hover:border-[#f8fbff] hover:bg-transparent">Add Tourist List</button>
                        </div>
                    </form>


                </div>

            </div>
        </div>
    );
};

export default AddBooks;