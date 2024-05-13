import BooksCategories from "./BooksCategories";
import Carousel from "./Carousel/Carousel";
import Newsletter from "./Newsletter";
import NumbersOfBooks from "./NumbersOfBooks";

const Home = () => {
    return (
        <div className="text-[#212121]">
            <div className="w-[80%] mx-auto mt-16 h-screen">
                <h2 className="text-center font-bold text-4xl mb-5 text-[#3F51B5]">Unlock a World of Knowledge</h2>
                <p className="text-center text-xl mb-10">Borrow, browse, and discover - all from the comfort of home.</p>
                <Carousel></Carousel>
            </div>

            <div className="my-24">

                <h2 className="text-4xl text-center text-[#3F51B5] font-bold md:w-[80%] mx-auto">Books Categories</h2>
                <BooksCategories></BooksCategories>

            </div>

            <div>
                <NumbersOfBooks></NumbersOfBooks>
            </div>

            <div>
                <Newsletter></Newsletter>
            </div>
        </div>
    );
};

export default Home;