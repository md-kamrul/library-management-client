import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const LogIn = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleLogIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;

                Swal.fire({
                    title: "Done!",
                    text: `LogIn successfully...`,
                    icon: "success"
                }),

                    navigate(
                        location?.state ?
                            location.state
                            :
                            "/"
                    )
            }).catch(() => {
                Swal.fire({
                    title: "Error!",
                    text: `Something went wrong. Please try again...`,
                    icon: "error"
                })
            });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        signIn(email, password)
            .then(

                Swal.fire({
                    title: "Done!",
                    text: `LogIn successfully...`,
                    icon: "success"
                }),

                navigate(
                    location?.state ?
                        location.state
                        :
                        "/"
                )
            )
            .catch(() => {
                Swal.fire({
                    title: "Error!",
                    text: `Please enter valid email and password...`,
                    icon: "error"
                })
            })
    }

    const providerTwitter = new TwitterAuthProvider();
    const handleTwitterRegister = () => {
        signInWithPopup(auth, providerTwitter)
            .then((result) => {
                const user = result.user;

                Swal.fire({
                    title: "Done!",
                    text: `LogIn successfully...`,
                    icon: "success"
                }),

                    navigate(
                        location?.state ?
                            location.state
                            :
                            "/"
                    )
            }).catch(() => {
                Swal.fire({
                    title: "Error!",
                    text: `Something went wrong. Please try again...`,
                    icon: "error"
                })
            });
    }
    const [showPassword, setShowPassword] = useState(false);

    document.title = "NSU Library - LogIn"
    return (
        <div>

            <div className="w-[90%] md:w-[80%] mx-auto mt-8 text-[#212121] rounded-lg pt-5">
                <h2 className="text-center text-2xl font-bold">LogIn</h2>
                <div className="card shrink-0 w-[80%] mx-auto">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Password</span>
                            </label>
                            <input name="password" type={showPassword ? "text" : "password"} placeholder="Your Password" className="input input-bordered" required />
                            <span className="text-xl relative ml-[86%] md:ml-[90%] lg:ml-[95%] top-[-34px] cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ?
                                        <FaEye />
                                        :
                                        <IoMdEyeOff />
                                }
                            </span>
                            <div className="flex gap-12 md:gap-0 md:justify-between">
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label label-text-alt">
                                    Do not Have an Account? <Link to="/register" className="label-text-alt link link-hover text-[#2b3440] font-bold underline"> Register</Link>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#3F51B5] border border-[#f8fbff] text-[#f8fbff] hover:text-[#3F51B5] hover:border-[#3F51B5] hover:bg-transparent">Login</button>
                        </div>
                        <div>
                            <h2 className="mt-5 text-center md:text-xl">-------------  Or LogIn Using  -------------</h2>
                            <div className="w-[20%] mx-auto mt-5">
                                <div className="flex gap-3 md:gap-0 md:justify-evenly md:w-[80%] mx-auto">
                                    <FcGoogle onClick={handleGoogleLogIn} className="text-3xl cursor-pointer" />
                                    <FaSquareXTwitter onClick={handleTwitterRegister} className="text-3xl cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;