import { Link } from "react-router-dom";

const BooksCategories = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between w-[80%] mx-auto mt-10 font-bold gap-5 items-center">
            <Link to="/categories/Business" className="cursor-pointer hover:bg-[#FFD54F] p-5 rounded-lg">Business</Link>
            <Link to="/categories/Biography" className="cursor-pointer hover:bg-[#FFD54F] p-5 rounded-lg">Biography</Link>
            <Link to="/categories/Comics" className="cursor-pointer hover:bg-[#FFD54F] p-5 rounded-lg">Comics</Link>
            <Link to="/categories/Health_and_Fitness" className="cursor-pointer hover:bg-[#FFD54F] p-5 rounded-lg">Health and Fitness</Link>
            <Link to="/categories/History" className="cursor-pointer hover:bg-[#FFD54F] p-5 rounded-lg">History</Link>
            <Link to="/categories/Literature_and_Fiction" className="cursor-pointer hover:bg-[#FFD54F] p-5 rounded-lg">Literature & Fiction</Link>
            <Link to="/categories/Mystries" className="cursor-pointer hover:bg-[#FFD54F] p-5 rounded-lg">Mystries</Link>
            <Link to="/categories/Science_and_Math" className="cursor-pointer hover:bg-[#FFD54F] p-5 rounded-lg">Science and Math</Link>
        </div>
    );
};

export default BooksCategories;