import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        const confirm_password = form.get("confirm-password");

        if (password.length < 6) {
            setRegisterError("Password must be at least 6 character...");
            Swal.fire({
                title: "Error!",
                text: `${registerError}`,
                icon: "error"
            });
            return;
        }

        if (!(/[a-z]/.test(password))) {
            setRegisterError("Password must have an Uppercase letter...");
            Swal.fire({
                title: "Error!",
                text: `${registerError}`,
                icon: "error"
            });
            return;
        }

        if (!(/[A-Z]/.test(password))) {
            setRegisterError("Password must have an Uppercase letter...");
            Swal.fire({
                title: "Error!",
                text: `${registerError}`,
                icon: "error"
            });
            return;
        }

        if (password !== confirm_password) {
            setRegisterError("Password is not matching with Confirm Password...");
            Swal.fire({
                title: "Error!",
                text: `${registerError}`,
                icon: "error"
            });
            return;
        }

        setRegisterError("");

        // creating user
        createUser(email, password)
            .then(result => {
                navigate(
                    location?.state ?
                        location.state
                        :
                        "/"
                )
            })
            .catch(error => {
                if (error.message.indexOf("(auth/email-already-in-use).")) {
                    setRegisterError("This email already have an account...");
                }
                Swal.fire({
                    title: "Error!",
                    text: `${registerError}`,
                    icon: "error"
                });
            })

        Swal.fire({
            title: "Done!",
            text: `Your Account has been successfully created...`,
            icon: "success"
        });
    }

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleRegister = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;

                Swal.fire({
                    title: "Done!",
                    text: `Your Account has been successfully created...`,
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
                });
            });
    }

    const providerTwitter = new TwitterAuthProvider();
    const handleTwitterRegister = () => {
        signInWithPopup(auth, providerTwitter)
            .then((result) => {
                const user = result.user;

                Swal.fire({
                    title: "Done!",
                    text: `Your Account has been successfully created...`,
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
                });
            });
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    document.title = "TourLand - Register"

    return (
        <div>

            <div className="w-[90%] md:w-[80%] mx-auto mt-8 text-[#212121] rounded-lg pt-5 bg-opacity-50">
                <h2 className="text-center text-2xl font-bold">Register</h2>
                <div className="card shrink-0 w-[80%] mx-auto">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Name</span>
                            </label>
                            <input name="my-name" type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Photo URL</span>
                            </label>
                            <input name="photo-url" type="text" placeholder="Your Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Your Email" className="input input-bordered" required />
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
                            <label className="label">
                                <span className="label-text">Confirm Your Password</span>
                            </label>
                            <input name="confirm-password" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Your Password" className="input input-bordered" required />
                            <span className="text-xl relative ml-[86%] md:ml-[90%] lg:ml-[95%] top-[-34px] cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {
                                    showConfirmPassword ?
                                        <FaEye />
                                        :
                                        <IoMdEyeOff />
                                }
                            </span>
                            <div className="flex justify-between">
                                <label className="label label-text-alt">
                                    Have an Account? <Link to="/login" className="label-text-alt underline text-[#2b3440] font-bold"> LogIn</Link>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#3F51B5] border border-[#f8fbff] text-[#f8fbff] hover:text-[#3F51B5] hover:border-[#3F51B5] hover:bg-transparent">Register</button>
                        </div>
                        <div>
                            <h2 className="mt-5 text-center md:text-xl">-------------  Or Register Using  -------------</h2>
                            <div className="w-[20%] mx-auto mt-5">
                                <div className="flex gap-3 md:gap-0 md:justify-evenly md:w-[80%] mx-auto">
                                    <FcGoogle onClick={handleGoogleRegister} className="text-3xl cursor-pointer" />
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

export default Register;