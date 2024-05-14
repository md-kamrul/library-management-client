import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {

    document.title = "NSU Library - Update Book Info";

    const bookDetails = useLoaderData();
    const email = bookDetails.email;

    const updateInfo = e => {
        e.preventDefault();

        const form = e.target;

        const image = form.image.value;
        const book_name = form.book_name.value;
        const author_name = form.author_name.value;
        const category = document.getElementById('category').value;
        const quantity = form.quantity.value;
        const short_description = form.short_description.value;
        const rating = form.rating.value;
        const book_content = form.book_content.value;

        const update = { email, image, book_name, author_name, category, quantity, short_description, rating, book_content };

        // update data to the server
        fetch(`https://library-management-server-pink.vercel.app/addBook/${bookDetails._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Done!",
                        text: `You successfully added a tourist spot...`,
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div>
            <div className="w-[80%] mx-auto">

                <div className=" mt-10 py-24 text-[#212121]">
                    <h2 className="text-center text-4xl text-[#3F51B5] mb-10 font-bold">Update Book Info</h2>

                    <form onSubmit={updateInfo} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Enter Your Email Address</span>
                            </label>
                            <input type="text" placeholder="Email Address" className="input input-bordered" name="email" disabled defaultValue={bookDetails.email} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Image</span>
                            </label>
                            <input type="text" placeholder="Image Link" className="input input-bordered" name="image" defaultValue={bookDetails.image} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Book Name</span>
                            </label>
                            <input type="text" placeholder="Book Name" className="input input-bordered" name="book_name" defaultValue={bookDetails.book_name} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Author Name</span>
                            </label>
                            <input type="text" placeholder="Author Name" className="input input-bordered" name="author_name" defaultValue={bookDetails.author_name} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Category</span>
                            </label>
                            <select id='category' className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Choose Category({bookDetails.category})</option>
                                <option value="Business">Business</option>
                                <option value="Biography">Biography</option>
                                <option value="Comics">Comics</option>
                                <option value="Health and Fitness">Health and Fitness</option>
                                <option value="History">History</option>
                                <option value="Literature and Fiction">Literature and Fiction</option>
                                <option value="Mystries">Mystries</option>
                                <option value="Science and Math">Science and Math</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Book Quantity</span>
                            </label>
                            <input type="number" placeholder="Book Quantity" className="input input-bordered" name="quantity" defaultValue={bookDetails.quantity} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Short Description</span>
                            </label>
                            <input type="text" placeholder="Short description" className="input input-bordered" name="short_description" defaultValue={bookDetails.short_description} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Rating</span>
                            </label>
                            <input type="number" min="0" max="10" step="0.5" placeholder="Rating" className="input input-bordered" name="rating" defaultValue={bookDetails.rating} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Anything about the book</span>
                            </label>
                            <input type="text" placeholder="Some contents/texts about the book" className="input input-bordered" name="book_content" defaultValue={bookDetails.book_content} required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#3F51B5] border border-[#f8fbff] text-[#f8fbff] hover:text-[#3F51B5] hover:border-[#3F51B5] hover:bg-transparent">Update Info</button>
                        </div>
                    </form>


                </div>

            </div>
        </div>
    );
};

export default UpdateBook;