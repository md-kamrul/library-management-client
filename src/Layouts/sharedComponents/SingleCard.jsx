import { AiFillDollarCircle } from "react-icons/ai";
import { IoTimeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const SingleCard = ({ signle_card }) => {
    const { _id, image, short_description, book_name, author_name, category, rating } = signle_card;


    return (
        <div>
            
            <div className="card bg-[#FFD54F] border border-[#FFD54F] bg-opacity-30">
                <figure className="px-5 pt-5">
                    <img src={image} alt="image" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{book_name}</h2>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold italic">By {author_name}</p>
                    </div>
                    {
                        short_description.length > 50 ?
                            <p>{short_description.slice(0, 50)}...</p>
                            :
                            <p>{short_description}</p>
                    }
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <FaStar className="text-xl text-[#3F51B5]" />
                            <p>{rating}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p><span className="text-[#3F51B5] font-bold">Category: </span>{category}</p>
                        </div>
                    </div>
                    <div className="card-actions">

                        <Link to={`/addBook/${_id}`}>
                            <button className="btn bg-[#3F51B5] border border-[#f8fbff] text-[#f8fbff] hover:text-[#3F51B5] hover:border-[#3F51B5] hover:bg-transparent">View Details</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;