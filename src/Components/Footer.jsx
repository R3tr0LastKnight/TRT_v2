/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import fb from "../Assets/footer/fb.svg";
import li from "../Assets/footer/li.svg";
import yt from "../Assets/footer/yt.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-400 p-4 pb-1">
        <div className="relative -top-8 bg-white border-4 h-11 font-bold border-gray-400 w-[30%] text-center left-[35%] rounded-lg flex items-center justify-center">
          Visit Us
        </div>
        <div className="flex justify-between flex-col md:flex-row mx-10">
          <div>
            <h1 className="font-bold text-xl">TRT</h1>
            <h1 className="font-bold underline -mt-2 text-xl pb-4">
              TECHNOLOGIES
            </h1>
            <p className="w-64 text-white">
              We are based in India and intend to do business across the globe.
            </p>
            <h2 className="text-white">Crafting radiators Since 2015</h2>
            <div className="mt-4">
              <h2 className="font-bold underline">Keep in Touch</h2>
              <div className="">
                <ul className="my-2 text-white">
                  <li>Phone: +91 42424 42424</li>
                  <li>Email: contact@trtradiators.com</li>
                </ul>
                <ul className="my-2 flex gap-2 scale-80 ">
                  <li>
                    <a href="facebook.com">
                      <img src={fb} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="linkedin.com">
                      <img src={li} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="youtube  .com">
                      <img src={yt} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-12 justify-center font-bold gap-2">
            <h1>City Office</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119120.72107926758!2d78.91768888860987!3d21.091723999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf5cb335686b%3A0x965c63dd50e83d3a!2sTrafo%20Radiators%20and%20Tanks%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1704540855293!5m2!1sen!2sin"
              // style="border:0;"

              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="h-[200px] w-[310px] md:h-[300px] md:w-[400px]"
            ></iframe>
          </div>
          <div className="flex flex-col py-12 justify-center font-bold gap-2">
            <h1>Production House</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238384.55406288762!2d78.9938456884253!3d21.002309301496787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfad9deb02a5%3A0x6b4c35b5b4edf515!2sTRT%20Technologies!5e0!3m2!1sen!2sin!4v1698655960583!5m2!1sen!2sin"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className=" h-[200px] w-[310px] md:h-[300px] md:w-[400px]"
            ></iframe>
          </div>
        </div>
        <div className="flex justify-between mx-10 text-[#f8ecec]">
          <div>Copyright © 2022 Trafo Raditors & Tanks Pvt.Ltd</div>
          <div>Powered by Trafo Raditors & Tanks Pvt.Ltd</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
