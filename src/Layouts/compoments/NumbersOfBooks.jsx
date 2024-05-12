const NumbersOfBooks = () => {
  return (
    <div className="my-24">

      <h2 className="text-4xl text-center text-[#3F51B5] font-bold md:w-[80%] mx-auto">NSU Library Collections</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5 w-[80%] mx-auto mt-10 text-center">
        <div className="text-[#212121] font-semibold  mb-1 ">
          51000+ <br />
          <span className="border-b-2 border-b-[#FFD54F]">Printed Books</span>
        </div>
        <div className="text-[#212121] font-semibold mb-1 ">
          2400+ <br />
          <span className="border-b-2 border-b-[#FFD54F]">Theses & Dissertations</span>
        </div>
        <div className="text-[#212121] font-semibold mb-1 ">
          87652+ <br />
          <span className="border-b-2 border-b-[#FFD54F]">Online E-book</span>
        </div>
        <div className="text-[#212121] font-semibold mb-1 ">
          98000+ <br />
          <span className="border-b-2 border-b-[#FFD54F]">Online Journals</span>
        </div>
      </div>

    </div>
  );
};

export default NumbersOfBooks;