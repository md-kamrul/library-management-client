import { useLoaderData } from "react-router-dom";
import SingleCard from "../../sharedComponents/SingleCard";

const CategoriesScience_and_Math = () => {
    document.title = "NSU Library - Science and Math Category"

    const show_book_list = useLoaderData();

    return (
        <div>

            <h2 className="text-center font-bold text-4xl mt-20 mb-5 text-[#3F51B5]">Science and Math Category</h2>
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-24">
                {
                    show_book_list.map(
                        signle_card => signle_card.category === "Science and Math" &&
                            < SingleCard key={signle_card._id} signle_card={signle_card} ></SingleCard>
                    )
                }
            </div>


        </div>
    );
};

export default CategoriesScience_and_Math;