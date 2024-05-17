import { FaEdit, FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaPlusSquare } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const BookDetails = () => {
    document.title = "NSU Library - Book Details";

    const [borrow, setBorrow] = useState(false);

    const cardDetails = useLoaderData();
    const eligible = cardDetails.quantity;

    const userInfo = useContext(AuthContext);
    const borrowedUserEmail = userInfo.user.email;
    const borrowedDate = new Date();


    const [borrowed_data, set_borrowed_data] = useState([]);
    const borrowCollectionURL = `https://library-management-server-pink.vercel.app/borrowBook`;
    useEffect(() => {
        fetch(borrowCollectionURL)
            .then(res => res.json())
            .then(data =>
                set_borrowed_data(data)
            )
    }, [])




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
                fetch(`https://library-management-server-pink.vercel.app/addBook/${cardDetails._id}`, {
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

    const handleBorrow = async () => {
        if (cardDetails.quantity >= 1 && cardDetails.quantity <= eligible) {
            const { value: date } = await Swal.fire({
                title: "Select Returing Date",
                input: "date",
                didOpen: () => {
                    const today = (new Date()).toISOString();
                    Swal.getInput().min = today.split("T")[0];
                }
            });
            if (date) {
                const returnDate = date;

                setBorrow(true);
                cardDetails.quantity = cardDetails.quantity - 1;
                console.log(cardDetails.quantity);

                const quantity = `${cardDetails.quantity}`;
                const _id = `${cardDetails._id}`;
                const email = `${cardDetails.email}`;
                const image = `${cardDetails.image}`;
                const book_name = `${cardDetails.book_name}`;
                const author_name = `${cardDetails.author_name}`;
                const category = `${cardDetails.category}`;
                const short_description = `${cardDetails.short_description}`;
                const rating = `${cardDetails.rating}`;
                const book_content = `${cardDetails.book_content}`;
                const updateInfo = { email, image, book_name, author_name, category, quantity, short_description, rating, book_content };
                console.log(updateInfo);


                // update data to the server
                fetch(`https://library-management-server-pink.vercel.app/addBook/${cardDetails._id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(updateInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {

                            const borrowList = { borrowedUserEmail, _id, borrowedDate, returnDate, borrow };

                            // send data to the server
                            fetch("https://library-management-server-pink.vercel.app/borrowBook", {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify(borrowList)
                            })
                                .then(res => res.json())
                                .then(data => {


                                    if (data.insertedId) {
                                        Swal.fire({
                                            title: "Done!",
                                            text: `You successfully borrowed  a Book...`,
                                            icon: "success"
                                        });
                                    }
                                })

                        }
                    })
            }
        }

        else {
            Swal.fire({
                title: "Error!",
                text: `No book is available....`,
                icon: "error"
            });
        }

    }


    return (
        <div className="pb-24">

            <h2 className="text-center font-bold text-4xl mt-20 mb-10 text-[#3F51B5]">Book Details</h2>

            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
                <div>
                    <img className="w-[80%] mx-auto" src={cardDetails.image} alt="" />
                    <div className="flex my-5 w-[80%] mx-auto">
                        <button onClick={() => handleDelete(cardDetails._id)}
                            className="btn bg-[#3F51B5] text-[#FFD54F] border hover:border-[#3F51B5] border-[#3F51B5] hover:bg-opacity-50 hover:bg-[#3F51B5] hover:text-[#3F51B5] mx-auto"><MdDelete className="text-lg" /></button>
                        <Link to={`/update/${cardDetails._id}`}>
                            <button
                                className="btn bg-[#3F51B5] text-[#FFD54F] border hover:border-[#3F51B5] border-[#3F51B5] hover:bg-opacity-50 hover:bg-[#3F51B5] hover:text-[#3F51B5] mx-auto"><FaEdit className="text-lg" /></button>
                        </Link>
                        <button onClick={handleBorrow}
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
}

export default BookDetails;