import Swal from 'sweetalert2'

const AddBooks = () => {

    document.title = "NSU Library - Add Books"

    const handleAddList = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const image = form.image.value;
        const book_name = form.book_name.value;
        const author_name = form.author_name.value;
        const category = document.getElementById('category').value;
        const quantity = form.quantity.value;
        const short_description = form.short_description.value;
        const rating = form.rating.value;
        const book_content = form.book_content.value;

        const addList = { email, image, book_name, author_name, category, quantity, short_description, rating, book_content };

        // send data to the server
        fetch("https://library-management-server-pink.vercel.app/addBook", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addList)
        })
            .then(res => res.json())
            .then(data => {


                if (data.insertedId) {
                    Swal.fire({
                        title: "Done!",
                        text: `You successfully added a Book...`,
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div>
            <div className="w-[80%] mx-auto">

                <div className=" mt-10 py-24 text-[#212121]">
                    <h2 className="text-center text-4xl text-[#3F51B5] mb-10 font-bold">Add Books</h2>

                    <form onSubmit={handleAddList} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Enter Your Email Address</span>
                            </label>
                            <input type="text" placeholder="Email Address" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Image</span>
                            </label>
                            <input type="text" placeholder="Image Link" className="input input-bordered" name="image" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Book Name</span>
                            </label>
                            <input type="text" placeholder="Book Name" className="input input-bordered" name="book_name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Author Name</span>
                            </label>
                            <input type="text" placeholder="Author Name" className="input input-bordered" name="author_name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Category</span>
                            </label>
                            <select id='category' className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Choose Category</option>
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
                            <input type="number" placeholder="Book Quantity" className="input input-bordered" name="quantity" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Short Description</span>
                            </label>
                            <input type="text" placeholder="Short description" className="input input-bordered" name="short_description" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Rating</span>
                            </label>
                            <input type="number" min="0" max="10" step="0.5" placeholder="Rating" className="input input-bordered" name="rating" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#212121]">Anything about the book</span>
                            </label>
                            <input type="text" placeholder="Some contents/texts about the book" className="input input-bordered" name="book_content" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#3F51B5] border border-[#f8fbff] text-[#f8fbff] hover:text-[#3F51B5] hover:border-[#3F51B5] hover:bg-transparent">Add Book</button>
                        </div>
                    </form>


                </div>

            </div>
        </div>
    );
};

export default AddBooks;