import { MdAssignmentReturn } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SingleBorrowedBook = ({ signle_book }) => {
    const { image, book_name, category, returnDate, borrowedDate } = signle_book;

    const cardDetails = useLoaderData();
    const eligible = cardDetails.quantity;

    const handleReturn = async () => {
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
                fetch(`https://library-management-server-pink.vercel.app/borrowBook/${cardDetails._id}`, {
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
        <div>
            <div className="card bg-[#FFD54F] border border-[#FFD54F] bg-opacity-30">
                <figure className="px-5 pt-5">
                    <img src={image} alt="image" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">
                        {
                            book_name.length > 30 ?
                                <p>{book_name.slice(0, 30)}...</p>
                                :
                                <p>{book_name}</p>
                        }
                    </h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <p><span className="text-[#3F51B5] font-bold">Category: </span>{category}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p><span className="text-[#3F51B5] font-bold">Borrowed Time: </span>{borrowedDate.split("T")[0]}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p><span className="text-[#3F51B5] font-bold">Return Time: </span>{returnDate}</p>
                        </div>
                    </div>
                    <div className="card-actions">

                        <button onClick={handleReturn}
                            className="btn bg-[#ff4f4f] text-[#ffffff] border hover:border-[#ff4f4f] border-[#ff4f4f] hover:bg-opacity-50 hover:bg-[#ff4f4f] mx-auto"><MdAssignmentReturn className="text-xl" /></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBorrowedBook;