import { Link } from "react-router-dom";
import Navbar from "./Layouts/sharedComponents/Navbar";
import Footer from "./Layouts/sharedComponents/Footer";

const ErrorPage = () => {

    document.title = "NSU Library - Error"

    return (
        <div className="w-full h-screen">

            <Navbar></Navbar>

            <h2 className="text-center text-[#121212] my-24">
                <span className="text-xl mb-3">
                    Page Not Found.
                </span>
                <br />
                <Link to="/" className="label-text-alt link link-hover text-[#d7a31a] font-bold underline"><span className="text-base">Go to Home</span></Link>
            </h2>

            <Footer></Footer>

        </div>
    );
};

export default ErrorPage;