import React from "react";

const Banner = () => {
  return (
    <div className="relative mx-24 py-16">
      <div className="carousel w-full relative">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/Xk1tsmh/Rectangle-8.png"
            className="w-full"
          />
          <div className="absolute py-44 text-white px-16">
            <h1 className="text-[48px] font-bold">CMA Fest</h1>
            <h1 className="text-xl">Make Memories That will Last A LifeTime. See Your Favorite </h1>
            <h1 className="text-xl">Artists Live Ar CMA Fest!</h1>
            <div className="flex gap-4 py-4">
                <button className="btn btn-active btn-secondary bg-[#591BFF] border-[#591BFF]"><img src="https://i.ibb.co/hmSgkYv/Vector.png" alt="" /> Get Ticket</button>
                <button className="btn btn-outline text-white border-white">Explore All Events</button>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/Xk1tsmh/Rectangle-8.png"
            className="w-full"
          />
          <div className="absolute py-44 text-white px-16">
            <h1 className="text-[48px] font-bold">CMA Fest</h1>
            <h1 className="text-xl">Make Memories That will Last A LifeTime. See Your Favorite </h1>
            <h1 className="text-xl">Artists Live Ar CMA Fest!</h1>
            <div className="flex gap-4 py-4">
                <button className="btn btn-active btn-secondary bg-[#591BFF] border-[#591BFF]"><img src="https://i.ibb.co/hmSgkYv/Vector.png" alt="" /> Get Ticket</button>
                <button className="btn btn-outline text-white border-white">Explore All Events</button>
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/Xk1tsmh/Rectangle-8.png"
            className="w-full"
          />
          <div className="absolute py-44 text-white px-16">
            <h1 className="text-[48px] font-bold">CMA Fest</h1>
            <h1 className="text-xl">Make Memories That will Last A LifeTime. See Your Favorite </h1>
            <h1 className="text-xl">Artists Live Ar CMA Fest!</h1>
            <div className="flex gap-4 py-4">
                <button className="btn btn-active btn-secondary bg-[#591BFF] border-[#591BFF]"><img src="https://i.ibb.co/hmSgkYv/Vector.png" alt="" /> Get Ticket</button>
                <button className="btn btn-outline text-white border-white">Explore All Events</button>
            </div>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/Xk1tsmh/Rectangle-8.png"
            className="w-full"
          />
          <div className="absolute py-44 text-white px-16">
            <h1 className="text-[48px] font-bold">CMA Fest</h1>
            <h1 className="text-xl">Make Memories That will Last A LifeTime. See Your Favorite </h1>
            <h1 className="text-xl">Artists Live Ar CMA Fest!</h1>
            <div className="flex gap-4 py-4">
                <button className="btn btn-active btn-secondary bg-[#591BFF] border-[#591BFF]"><img src="https://i.ibb.co/hmSgkYv/Vector.png" alt="" /> Get Ticket</button>
                <button className="btn btn-outline text-white border-white">Explore All Events</button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-center w-full gap-1">
        <a href="#item1" className="btn btn-xs"></a>
        <a href="#item2" className="btn btn-xs"></a>
        <a href="#item3" className="btn btn-xs"></a>
        <a href="#item4" className="btn btn-xs"></a>
      </div>
    </div>
  );
};

export default Banner;
