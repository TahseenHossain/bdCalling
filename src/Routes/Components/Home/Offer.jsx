import { MdVerified } from "react-icons/md";

const Offer = () => {
  return (
    <div className="flex justify-around bg-[#7342F9] rounded-[24px] lg:mx-24 my-4">
      <div>
        <img
          src="https://i.ibb.co/7Cb9pJY/Group-29.png"
          alt=""
          className="p-24"
        />
      </div>
      <div className="p-24 relative">
        <h1 className="text-white text-5xl font-bold">
          Host Your Event Easily & Automatedly With Us
        </h1>
        <h2 className="text-white text-3xl py-3">
          We Provide The Best Event Ticketing & Management Solutions
        </h2>
        <div className="flex text-white py-3 items-center gap-2  text-xl">
          <h4>
            <MdVerified />
          </h4>
          <h4> Host Your Event With Easy Steps!</h4>
        </div>
        <div className="flex text-white py-3 items-center gap-2 text-xl">
          <h4>
            <MdVerified />
          </h4>
          <h4> Automated Payment System & Ticket Will Be Sent To Mail.</h4>
        </div>
        <div className="flex text-white py-3 items-center gap-2 text-xl">
          <h4>
            <MdVerified />
          </h4>
          <h4> Access To Registration And Transaction Reports</h4>
        </div>
        <div className="flex text-white py-3 items-center gap-2 text-xl">
          <h4>
            <MdVerified />
          </h4>
          <h4> Send Bulk Personalized Mail With Attachments</h4>
        </div>
        <img src="https://i.ibb.co/XYjFnK2/Group.png" alt="" className="absolute bottom-0.5 right-0.5 rounded-br-[24px]"/>
      </div>
    </div>
  );
};

export default Offer;
