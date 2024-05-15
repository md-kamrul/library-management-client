import { useLoaderData } from "react-router-dom";
import SingleBorrowedBook from "./SingleBorrowedBook";
import { useEffect, useState } from "react";

const BorrowedBooks = () => {

    document.title = "NSU Library - Borrowed Books"

    const all_books = useLoaderData();
    console.log(all_books);

    const [borrowed_data, set_borrowed_data] = useState([]);
    const borrowCollectionURL = `https://library-management-server-pink.vercel.app/borrowBook`;
    useEffect(() => {
        fetch(borrowCollectionURL)
            .then(res => res.json())
            .then(data =>
                set_borrowed_data(data)
            )
    }, [])

    // const [single_borrowed_book, set_single_borrowed_book] = useState([]);
    let set_single_borrowed_book = [];
    for (let i = 0; i < all_books.length; i++) { 
        for (let j = 0; j < borrowed_data.length; j++) {
            if (all_books[i]._id == borrowed_data[j]._id) { 
                // set_single_borrowed_book(all_books[i]);
                set_single_borrowed_book[j] = all_books[i];
            }
            
        }
    }
    console.log("main: ", set_single_borrowed_book);

        return (
            <div>

                <h2 className="text-center font-bold text-4xl mt-20 mb-5 text-[#3F51B5]">Borrowed Books</h2>
                <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-24">
                    {
                        set_single_borrowed_book.map(
                            single_borrowed_book => < SingleBorrowedBook key={single_borrowed_book._id} single_borrowed_book={single_borrowed_book} ></SingleBorrowedBook>
                        )
                    }
                </div>

            </div>
        );
};

export default BorrowedBooks;