import { MdAssignmentReturn } from "react-icons/md";

const SingleBorrowedBook = ({ signle_book }) => {
    const { image, book_name, category } = signle_book;
    console.log("numbers: ", image, book_name, category);
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
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <p><span className="text-[#3F51B5] font-bold">Category: </span>{category}</p>
                        </div>
                    </div>
                    <div className="card-actions">

                        <button
                            className="btn bg-[#ff4f4f] text-[#ffffff] border hover:border-[#ff4f4f] border-[#ff4f4f] hover:bg-opacity-50 hover:bg-[#ff4f4f] mx-auto"><MdAssignmentReturn className="text-xl" /></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBorrowedBook;