import { Outlet } from "react-router-dom";
import Footer from "./sharedComponents/Footer";

const Roots = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;