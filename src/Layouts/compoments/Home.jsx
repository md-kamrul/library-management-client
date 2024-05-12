import Carousel from "./Carousel/Carousel";

const Home = () => {
    return (
        <div className="text-[#212121]">
            <div className="w-[80%] mx-auto mt-16 h-screen">
                <h2 className="text-center font-bold text-5xl mb-5 text-[#3F51B5]">Unlock a World of Knowledge</h2>
                <p className="text-center text-xl mb-10">Borrow, browse, and discover - all from the comfort of home.</p>
                <Carousel></Carousel>
            </div>
        </div>
    );
};

export default Home;