import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import Swal from "sweetalert2";

const Profile = () => {

    document.title = "NSU Library - Profile"

    const userInfo = useContext(AuthContext);
    const auth = getAuth(app);
    const user = auth.currentUser;

    var displayName;
    var email;

    const updateProfile = e => {
        e.preventDefault();

        const userName = document.getElementById('userName').value;
        const email = document.getElementById('email').value;

        updateProfile(auth.currentUser, {
            displayName: `${userName}`, email: `${email}`
        }).then(() => {
            // Profile updated!
            Swal.fire({
                title: "Done!",
                text: `Account info has been updated...`,
                icon: "success"
            });
        }).catch(() => {
            // An error occurred
            Swal.fire({
                title: "Error!",
                text: `Something went wrong. Please try again...`,
                icon: "error"
            });
        });

    }

    if (user !== null) {
        user.providerData.forEach((profile) => {
            displayName = profile.displayName;
            email = profile.email;
        });
    }

    return (
        <div className="text-[#212121]">
            <h2 className="text-center text-4xl text-[#3F51B5] mb-10 mt-24 font-bold">User Profile</h2>
            <div className="py-24 w-[80%] mx-auto text-xl text-center">

                <img className="w-[10%] mx-auto rounded-full mb-10" src={`${userInfo.user.photoURL}`} alt="" />

                <div className="mb-5">
                    <span className="text-[#212121]">Name: </span>
                    <input className="p-2 rounded-md ml-3 pl-5 border border-[#FFD54F]" type="text" id="userName" defaultValue={userInfo.user.displayName} />
                </div>
                <div className="mb-5">
                    <span className="text-[#212121]">Email Address: </span>
                    <input className="p-2 rounded-md ml-3 pl-5 border border-[#FFD54F]" type="email" id="email" defaultValue={userInfo.user.email} />
                </div>
                <div className="mb-5 flex gap-2 flex-col md:flex-row justify-center">
                    <span className="text-[#212121]">Last Sign In: </span>
                    <p>{userInfo.user.metadata.creationTime}</p>
                </div>
                <div className="mb-5 flex gap-2 flex-col md:flex-row justify-center">
                    <span className="text-[#212121]">Last Sign In: </span>
                    <p>{userInfo.user.metadata.lastSignInTime}</p>
                </div>

                <button onClick={updateProfile} className="btn bg-[#3F51B5] border border-[#f8fbff] text-[#f8fbff] hover:text-[#3F51B5] hover:border-[#3F51B5] hover:bg-transparent">Update Profile</button>

            </div>
        </div>
    );
};

export default Profile;