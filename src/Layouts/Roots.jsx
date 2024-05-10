import { Outlet } from "react-router-dom";
import Footer from "./sharedComponents/Footer";
import Navbar from "./sharedComponents/Navbar";

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;