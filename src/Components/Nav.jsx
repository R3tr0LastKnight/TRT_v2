import React from "react";
import logo from "../Assets/Index/trtlogo.png";
import bgVid from "../Assets/Index/bgVideo.mp4";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import IndexPage from "../Pages/IndexPage";
import AboutPage from "../Pages/AboutPage";
import Services from "./Services";

const Nav = () => {
  return (
    <div>
      <video
        className=" absolute z-0 object-cover overflow- hover:underline blur-sm"
        src={bgVid}
        autoPlay
        muted
        loop
      ></video>
      <nav className="flex  flex-col justify-center items-center py-2 pb-12  ">
        <div className="relative  flex flex-col items-center text-white ">
          <Link to="/">
            <img src={logo} alt="" className="h-20 w-32 mt-6" />
          </Link>

          <div className="flex p-3 text-center justify-center mt-20 md:mt-4 md:text-xl text-black md:text-white bg-gray-300 bg-opacity-50 mx-3 rounded-xl">
            <div className="w-1/2">
              <a
                target="blank"
                href="https://maps.app.goo.gl/czjSot5QUMxTfBz26"
              >
                <div className="font-bold">
                  Trafo Radiators & Tanks Pvt.Ltd.
                </div>

                <div className="cursor-pointer hover:underline">
                  M.I.D.C. UMRED, NAGPUR
                </div>
              </a>
            </div>
            <div className="w-1/2">
              <div className="font-bold ">
                TRT <br />
                Technologies
              </div>
              <a
                target="blank"
                href="https://maps.app.goo.gl/czjSot5QUMxTfBz26"
              >
                <div className="cursor-pointer hover:underline">
                  SEZ, MIHAN,
                  <br /> NAGPUR
                </div>
              </a>
            </div>
          </div>
          <div className="text-center mt-5 p-3 px-4 mx-4 font-semibold text-black md:text-white bg-gray-300 bg-opacity-50 rounded-xl  ">
            The Manufacturers of Pressed Steel RADIATORS for Power and
            Distribution Transformers
          </div>

          <Services />
          <span className="flex text-xs relative text-black md:text-xl  gap-2 mt-16">
            <Link to="/" className="p-1 cursor-pointer hover:underline">
              Home
            </Link>
            <Link to="/about" className="p-1 cursor-pointer hover:underline">
              About
            </Link>
            <Link to="/products" className="p-1 cursor-pointer hover:underline">
              Products
            </Link>

            <Link
              to="/credentials"
              className="p-1 cursor-pointer hover:underline"
            >
              Credentials
            </Link>
            <Link to="/contact" className="p-1 cursor-pointer hover:underline">
              Contact Us
            </Link>
          </span>
          <hr className="border border-black w-full" />
        </div>
      </nav>
      {/* <div className="rounded-full z-20 bg-gray-400 text-white p-9 w-24 fixed bottom-8 right-8 border border-white cursor-pointer ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
      </div> */}
    </div>
  );
};

export default Nav;
