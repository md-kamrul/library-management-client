import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import { Tooltip } from "react-tooltip";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navBar = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            user ?
                <li><NavLink to="/all_books">All Books</NavLink></li>
                :
                <></>
        }
        {
            user ?
                <li><NavLink to="/add_books">Add Books</NavLink></li>
                :
                <></>
        }
        {
            user ?
                <li><NavLink to="/borrowed_books"> Borrowed Books</NavLink></li>
                :
                <></>
        }
        {
            user ?
                <li><Link onClick={handleSignOut}>LogOut</Link></li>
                :
                <li><NavLink to="/login">LogIn</NavLink></li>
        }
        {
            user ?
                <li><NavLink to="/profile">
                    <CgProfile className="text-3xl" />
                </NavLink></li>
                :
                <li><NavLink to="/register">Register</NavLink></li>
        }
    </>

    return (
        <div className="pt-5 border-b border-b-[#3F51B5]">
            <div className="navbar text-[#212121] rounded-lg w-[90%] md:w-[80%] mx-auto font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-[#3F51B5] border border-[#3F51B5] rounded-box w-52">
                            {navBar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl bg-transparent hover:bg-transparent">
                        <Link to="/" className="flex gap-1 items-center">
                            <img className="h-[50px]" src="https://i.ibb.co/gm41H5Q/logo.png" alt="logo" />
                            NSU Library
                        </Link>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navBar}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;