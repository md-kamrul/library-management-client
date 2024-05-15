import { useLoaderData } from "react-router-dom";
import SingleBorrowedBook from "./SingleBorrowedBook";

const BorrowedBooks = () => {

    document.title = "NSU Library - Borrowed Books"

    const all_books = useLoaderData();
    console.log(all_books);

    return (
        <div>

            <h2 className="text-center font-bold text-4xl mt-20 mb-5 text-[#3F51B5]">Borrowed Books</h2>
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-24">
                {
                    all_books.map(
                        signle_book => < SingleBorrowedBook key={signle_book._id} signle_book={signle_book} ></SingleBorrowedBook>
                    )
                }
            </div>

        </div>
    );
};

export default BorrowedBooks;