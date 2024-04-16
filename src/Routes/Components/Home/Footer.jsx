import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#591BFF] to-[#7B4AFFAB] lg:px-24">
      <footer className="footer p-10 text-base-content py-16 text-xl">
        <nav>
          <div>
            <img
              src="https://i.ibb.co/Qr957Hh/Event-Host.png"
              alt=""
              className="pb-6"
            />
            <div className="text-white">
              <h3>IDEA Project, ICT Tower (Oth Floor),</h3>
              <h3>Plot:E-14X, Agargaon, Dhaka- 1207</h3>
              <h3>02222-222222, 01111111111</h3>
            </div>
          </div>
        </nav>
        <nav className="text-white">
          <h6 className="link link-hover">Home</h6>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="text-white">
          <h6 className="link link-hover">Event Dashboard</h6>
          <a className="link link-hover">Terms & Condition</a>
          <a className="link link-hover">Privacy & Refund Policy</a>
        </nav>
        <nav>
          <h6 className="link link-hover text-white">Follow Us</h6>
          <div className="grid grid-flow-col gap-4 text-white text-xl">
            <FaFacebook />
            <FaInstagram />
            <TiSocialLinkedinCircular />
            <FaYoutube />
          </div>
        </nav>
      </footer>
      <div className="border-b border-gray-300 my-[1px]"></div>
      <footer className="flex justify-between  py-10">
        <div className="flex gap-6 text-base-content text-xs">
          <h1 className="text-white text-[36px] py-6">Pay With</h1>
          <img
            src="https://i.ibb.co/5j6r1gV/image-9.png"
            alt=""
            className="w-16 h-16"
          />
          <img
            src="https://i.ibb.co/TmqF5NG/Group-40.png"
            alt=""
            className="w-16 h-16"
          />
          <img
            src="https://i.ibb.co/nbqH8YT/dutch-bangla-rocket-logo-B4-D1-CC458-D-seeklogo-1.png"
            alt=""
            className="w-16 h-16"
          />
        </div>
        <div>
            <p className="text-white">Copyright © 2024 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
