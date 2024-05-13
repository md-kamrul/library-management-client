import { useLoaderData } from "react-router-dom";
import SingleCard from "../../sharedComponents/SingleCard";

const CategoriesMystries = () => {
    document.title = "NSU Library - Mystries Category"

    const show_book_list = useLoaderData();

    return (
        <div>

            <h2 className="text-center font-bold text-4xl mt-20 mb-5 text-[#3F51B5]">Mystries Category</h2>
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-24">
                {
                    show_book_list.map(
                        signle_card => signle_card.category === "Mystries" &&
                            < SingleCard key={signle_card._id} signle_card={signle_card} ></SingleCard>
                    )
                }
            </div>


        </div>
    );
};

export default CategoriesMystries;