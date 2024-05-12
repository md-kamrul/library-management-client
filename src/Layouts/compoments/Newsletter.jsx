const Newsletter = () => {
    return (
        <div className="mb-24 w-[80%] mx-auto">

            <h2 className="text-4xl text-center text-[#3F51B5] font-bold">Newsletter</h2>

            <p className="md:w-[70%] mx-auto my-10">Get exclusive updates on new arrivals, staff picks, upcoming events, and library news delivered straight to your inbox. Be the first to know about exciting happenings and resources available at your fingertips!</p>

            <label className="input input-bordered flex items-center gap-2 md:w-[50%] mx-auto">
                Email
                <input type="text" className="grow" placeholder="kala@nsu.com" />
            </label>

        </div>
    );
};

export default Newsletter;