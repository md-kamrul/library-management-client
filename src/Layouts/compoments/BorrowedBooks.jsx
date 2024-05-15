import { useLoaderData } from "react-router-dom";
import SingleBorrowedBook from "./SingleBorrowedBook";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const BorrowedBooks = () => {

    document.title = "NSU Library - Borrowed Books"

    const userInfo = useContext(AuthContext);

    const all_books = useLoaderData();

    const [borrowed_data, set_borrowed_data] = useState([]);
    const borrowCollectionURL = `https://library-management-server-pink.vercel.app/borrowBook`;
    useEffect(() => {
        fetch(borrowCollectionURL)
            .then(res => res.json())
            .then(data =>
                set_borrowed_data(data)
            )
    }, [])

    let set_single_borrowed_book = [];
    for (let i = 0; i < all_books.length; i++) {
        for (let j = 0; j < borrowed_data.length; j++) {
            if (all_books[i]._id == borrowed_data[j]._id && borrowed_data[j].borrowedUserEmail === userInfo.user.email) {
                set_single_borrowed_book[j] = all_books[i];
                set_single_borrowed_book[j].borrowedDate = borrowed_data[j].borrowedDate;
                set_single_borrowed_book[j].returnDate = borrowed_data[j].returnDate;
            }

        }
    }

    return (
        <div>

            <h2 className="text-center font-bold text-4xl mt-20 mb-5 text-[#3F51B5]">Borrowed Books</h2>
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-24">
                {
                    set_single_borrowed_book.map(
                        signle_book => < SingleBorrowedBook key={signle_book._id} signle_book={signle_book} ></SingleBorrowedBook>
                    )
                }
            </div>

        </div>
    );
};

export default BorrowedBooks;