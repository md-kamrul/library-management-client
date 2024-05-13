import { useLoaderData } from "react-router-dom";
import SingleCard from "../../sharedComponents/SingleCard";

const CategoriesLiterature_and_Fiction = () => {
    document.title = "NSU Library - Literature and Fiction Category"

    const show_book_list = useLoaderData();

    return (
        <div>

            <h2 className="text-center font-bold text-4xl mt-20 mb-5 text-[#3F51B5]">Literature and Fiction Category</h2>
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-24">
                {
                    show_book_list.map(
                        signle_card => signle_card.category === "Literature and Fiction" &&
                            < SingleCard key={signle_card._id} signle_card={signle_card} ></SingleCard>
                    )
                }
            </div>


        </div>
    );
};

export default CategoriesLiterature_and_Fiction;