import { IoLocationSharp } from "react-icons/io5";

const Events = () => {
  return (
    <div className="lg:px-24 py-16">
      <h1 className="text-5xl font-bold text-center pb-12">Events</h1>
      <div>
        <ul className="flex gap-8 justify-center text-3xl font-semibold">
          <li>All</li>
          <li>For You</li>
          <li>This Day</li>
          <li>This Week</li>
          <button className="btn btn-active bg-[#7342F9] text-white text-3xl font-semibold">
            Music
          </button>
          <li>Union</li>
        </ul>
      </div>
      <div className="flex justify-between pt-16">
        <div className="card w-96 bg-[#F1F3FF]">
          <figure className="px-1 pt-5">
            <img
              src="https://i.ibb.co/W6txrFc/Rectangle-16.png"
              alt="Shoes"
              className="rounded-xl border-dotted border-2 pb-5 border-b-[#7342F9] "
            />
          </figure>
          <button className="rounded-lg w-12 h-5 bg-[#7342F9] text-white text-sm absolute left-9 top-8">
            Online
          </button>
          <button className="bg-[#7342F9] flex items-center justify-centers absolute right-9 top-8 w-24 h-10 rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Favourite
          </button>
          <div className="flex justify-around">
            <div>
              <button className="rounded-lg w-12 h-5 bg-[#7342F9] text-white text-sm">
                Music
              </button>
              <div className="flex gap-2 items-center py-2">
                <h2 className="text-[#7342F9]">
                  <IoLocationSharp />
                </h2>
                <h3>Celebrity Convention Hall</h3>
              </div>
              <p className="text-2xl font-bold py-2">Roufisn's HSC-24 Rag <br></br>Day</p>
            </div>            
            <button className="h-24 w-24 rounded-xl p-3 border-white bg-white flex-col"><h1 className="2xl font-bold">Apr</h1><h2 className="text-[#591BFF] 4xl font-extrabold">20</h2><h3 className="2xl font-bold">10:00 PM</h3></button>            
          </div>
          <div className="flex gap-4 py-2 justify-between px-4">
                <button className="btn btn-active btn-secondary bg-[#591BFF] border-[#591BFF]">
                  <img src="https://i.ibb.co/hmSgkYv/Vector.png" alt="" /> See
                  Ticket
                </button>
                <button className="btn btn-active btn-secondary border-white bg-white  text-[#591BFF]">
                  {" "}
                  20{" "}
                  <div>
                    <h3 className="text-black">Seat</h3>
                    <h3 className="text-black">Left</h3>
                  </div>
                </button>
                <h3 className="text-[#591BFF] text-lg flex items-center">
                  See More
                </h3>
              </div>
        </div>
        <div className="card w-96 bg-[#F1F3FF]">
          <figure className="px-1 pt-5">
            <img
              src="https://i.ibb.co/yytSpVh/Rectangle-16-1.png"
              alt="Shoes"
              className="rounded-xl border-dotted border-2 pb-5 border-b-[#7342F9] "
            />
          </figure>
          <button className="rounded-lg w-12 h-5 bg-[#7342F9] text-white text-sm absolute left-9 top-8">
            Online
          </button>
          <button className="bg-[#7342F9] flex items-center justify-centers absolute right-9 top-8 w-24 h-10 rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Favourite
          </button>
          <div className="flex justify-around">
            <div>
              <button className="rounded-lg w-12 h-5 bg-[#7342F9] text-white text-sm">
                Music
              </button>
              <div className="flex gap-2 items-center py-2">
                <h2 className="text-[#7342F9]">
                  <IoLocationSharp />
                </h2>
                <h3>Celebrity Convention Hall</h3>
              </div>
              <p className="text-2xl font-bold py-2">Roufisn's HSC-24 Rag <br></br>Day</p>
            </div>            
            <button className="h-24 w-24 rounded-xl p-3 border-white bg-white flex-col"><h1 className="2xl font-bold">Apr</h1><h2 className="text-[#591BFF] 4xl font-extrabold">20</h2><h3 className="2xl font-bold">10:00 PM</h3></button>            
          </div>
          <div className="flex gap-4 py-2 justify-between px-4">
                <button className="btn btn-active btn-secondary bg-[#591BFF] border-[#591BFF]">
                  <img src="https://i.ibb.co/hmSgkYv/Vector.png" alt="" /> See
                  Ticket
                </button>
                <button className="btn btn-active btn-secondary border-white bg-white  text-[#591BFF]">
                  {" "}
                  20{" "}
                  <div>
                    <h3 className="text-black">Seat</h3>
                    <h3 className="text-black">Left</h3>
                  </div>
                </button>
                <h3 className="text-[#591BFF] text-lg flex items-center">
                  See More
                </h3>
              </div>
        </div>
        <div className="card w-96 bg-[#F1F3FF]">
          <figure className="px-1 pt-5">
            <img
              src="https://i.ibb.co/y4mMHhd/Rectangle-16-2.png"
              alt="Shoes"
              className="rounded-xl border-dotted border-2 pb-5 border-b-[#7342F9] "
            />
          </figure>
          <button className="rounded-lg w-12 h-5 bg-[#7342F9] text-white text-sm absolute left-9 top-8">
            Online
          </button>
          <button className="bg-[#7342F9] flex items-center justify-centers absolute right-9 top-8 w-24 h-10 rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Favourite
          </button>
          <div className="flex justify-around">
            <div>
              <button className="rounded-lg w-12 h-5 bg-[#7342F9] text-white text-sm">
                Music
              </button>
              <div className="flex gap-2 items-center py-2">
                <h2 className="text-[#7342F9]">
                  <IoLocationSharp />
                </h2>
                <h3>Celebrity Convention Hall</h3>
              </div>
              <p className="text-2xl font-bold py-2">Roufisn's HSC-24 Rag <br></br>Day</p>
            </div>            
            <button className="h-24 w-24 rounded-xl p-3 border-white bg-white flex-col"><h1 className="2xl font-bold">Apr</h1><h2 className="text-[#591BFF] 4xl font-extrabold">20</h2><h3 className="2xl font-bold">10:00 PM</h3></button>             
          </div>
          <div className="flex gap-4 py-2 justify-between px-4">
                <button className="btn btn-active btn-secondary bg-[#591BFF] border-[#591BFF]">
                  <img src="https://i.ibb.co/hmSgkYv/Vector.png" alt="" /> See
                  Ticket
                </button>
                <button className="btn btn-active btn-secondary border-white bg-white  text-[#591BFF]">
                  {" "}
                  20{" "}
                  <div>
                    <h3 className="text-black">Seat</h3>
                    <h3 className="text-black">Left</h3>
                  </div>
                </button>
                <h3 className="text-[#591BFF] text-lg flex items-center">
                  See More
                </h3>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
