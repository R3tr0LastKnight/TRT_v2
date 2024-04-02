import React from "react";
// import "./Services.css";
import Gear from "../Assets/Component Assets/gear.png";
import SHIPPING from "../Assets/Component Assets/SHIPPING.png";
import rad from "../Assets/Component Assets/rad.png";

const Services = () => {
  return (
    <div className="md:flex justify-center flex-col md:flex-row md:gap-8 hidden">
      <div className=" bg-gray-300 bg-opacity-50 p-8 relative flex flex-col rounded-xl mb-4 md:w-[40%] my-6  md:mt-64 md:-top-56 text-black ml-2 justify-center items-center">
        <img src={rad} alt="" id="divisionIcon" className="" />
        <h1>CREATION</h1>
      </div>
      <div className=" bg-gray-300 bg-opacity-50 p-8 relative flex flex-col rounded-xl mb-4 md:w-[40%] my-6  md:mt-64 md:-top-56 text-black ml-2 justify-center items-center">
        <img src={Gear} alt="" id="divisionIcon" />
        <h1>Services</h1>
      </div>
      <div className=" bg-gray-300 bg-opacity-50 p-8 relative flex flex-col rounded-xl mb-4 md:w-[40%] my-6  md:mt-64 md:-top-56 text-black ml-2 justify-center items-center">
        <img src={SHIPPING} alt="" id="divisionIcon" />
        <h1>Shipping </h1>
      </div>
    </div>
  );
};

export default Services;
