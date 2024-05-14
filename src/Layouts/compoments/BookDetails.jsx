import { AiFillDollarCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
    document.title = "TourLand - Tourist Spot Details";

    const cardDetails = useLoaderData();

    return (
        <div className="bg-[#000e25] text-[#f8fbff] pb-24">

            <h2 className="text-center text-2xl text-[#d7a31a] mb-10 mt-24 font-bold">Tourist Spot Details</h2>

            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 p-10 border-2 border-[#4d95a7] rounded-lg">
                <div>
                    <img className="w-full" src={cardDetails.image} alt="" />
                    <div className="text-2xl pt-3">{cardDetails.touristSpot}</div>
                    <div className="text-2xl pt-3 flex gap-2 items-center">
                        <FaLocationDot className="text-xl text-[#4d95a7]" />
                        {cardDetails.location}
                    </div>
                    <div className="text-2xl pt-3 flex gap-2 items-center">
                        <AiFillDollarCircle className="text-xl text-[#4d95a7]" />
                        {cardDetails.averageCost}
                    </div>
                </div>
                <div className="text-xl">
                    <div className="mb-4">
                        <div className="underline mb-2 text-2xl text-[#4d95a7]">Country</div>
                        {cardDetails.country}
                    </div>
                    <div className="mb-4">
                        <div className="underline mb-2 text-2xl text-[#4d95a7]">Short Description</div>
                        {cardDetails.shortDescription}
                    </div>
                    <div className="mb-4">
                        <div className="underline mb-2 text-2xl text-[#4d95a7]">Best Time for Visit</div>
                        {cardDetails.seasonality}
                    </div>
                    <div className="mb-4">
                        <div className="underline mb-2 text-2xl text-[#4d95a7]">Total Visitor Per Year</div>
                        {cardDetails.totalVisitorPerYear}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;