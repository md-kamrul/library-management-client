import { FaEdit, FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaPlusSquare } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const BookDetails = () => {
    document.title = "NSU Library - Book Details";

    const cardDetails = useLoaderData();
    const { _id } = cardDetails;

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log(cardDetails._id);
                fetch(`https://library-management-server-pink.vercel.app/addBook/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The card has been deleted. Please reload the page.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <div className="pb-24">

            <h2 className="text-center font-bold text-4xl mt-20 mb-10 text-[#3F51B5]">Book Details</h2>

            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
                <div>
                    <img className="w-[80%] mx-auto" src={cardDetails.image} alt="" />
                    <div className="flex my-5 w-[80%] mx-auto">
                        <button onClick={() => handleDelete(_id)}
                            className="btn bg-[#3F51B5] text-[#FFD54F] border hover:border-[#3F51B5] border-[#3F51B5] hover:bg-opacity-50 hover:bg-[#3F51B5] hover:text-[#3F51B5] mx-auto"><MdDelete className="text-lg" /></button>
                        <Link to={`/update/${_id}`}>
                            <button
                                className="btn bg-[#3F51B5] text-[#FFD54F] border hover:border-[#3F51B5] border-[#3F51B5] hover:bg-opacity-50 hover:bg-[#3F51B5] hover:text-[#3F51B5] mx-auto"><FaEdit className="text-lg" /></button>
                        </Link>
                        <button
                            className="btn bg-[#3F51B5] text-[#FFD54F] border hover:border-[#3F51B5] border-[#3F51B5] hover:bg-opacity-50 hover:bg-[#3F51B5] hover:text-[#3F51B5] mx-auto"><FaPlusSquare className="text-lg" /></button>
                    </div>
                </div>
                <div>
                    <div className="text-2xl pt-3 font-bold">{cardDetails.book_name}</div>
                    <div className="text-lg pt-3">
                        By <span className="font-semibold italic">{cardDetails.author_name}</span>
                    </div>
                    <div className="flex gap-4 my-2">
                        <div className="flex gap-2 font-semibold">
                            <FaStar className="text-2xl text-[#FFD54F]" />
                            {cardDetails.rating}
                        </div>
                        <div>
                            <span className="text-[#FFD54F] font-semibold">Category: </span>
                            <span className="font-semibold">{cardDetails.category}</span>
                        </div>
                    </div>
                    <div>There are <span className="font-bold border-b-2 border-b-[#FFD54F]">{cardDetails.quantity} </span> to borrow.</div>
                    <div className="mt-10">
                        <span className="font-bold text-lg border-b-2 border-b-[#FFD54F]">Short Description:</span>
                        <div>{cardDetails.short_description}</div>
                    </div>
                </div>
            </div>

            <div className="w-[80%] mx-auto mt-10">
                <span className="font-bold text-lg border-b-2 border-b-[#FFD54F]">Interesting Things About The Book:</span>
                <div>{cardDetails.book_content}</div>
            </div>

        </div >
    );
};

export default BookDetails;