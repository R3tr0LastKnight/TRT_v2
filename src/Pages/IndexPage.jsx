import React from "react";
import radiator from "../Assets/Index/x-removebg-preview.png";
import fan from "../Assets/Index/icons8-fan-100.png";
import wrench from "../Assets/Index/icons8-wrenches-64.png";
import clip from "../Assets/Index/icons8-clipboard-100.png";

const IndexPage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row mb-14 justify-evenly gap-2">
        <div className="flex flex-col md:w-1/3 p-4 gap-6">
          <h1 className="font-bold my-6 text-[36px]">
            PIONEERING HEAT TRANSFER SOLUTIONS
          </h1>
          <p className="text-[15px]">
            Providing high quality heat transfer solutions to many industries
            with one objective of delivering quality products has led the
            evolution of our company.
          </p>
          <p className="text-[15px]">
            We believe that continuous improvements of our products, processes,
            services and skills will provide long term success and values to our
            customers.
          </p>
          <p className="text-[15px]">
            And with our in house research and manufacturing faclity enables us
            with producing quality products for our customers.
          </p>
          <button className="w-[50%] bg-black text-white font-bold py-2">
            KNOW MORE
          </button>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img src={radiator} alt="" />
        </div>
        <div className="flex flex-col md:w-1/3 mx-4 md:mt-24 gap-8">
          <div className="flex justify-between gap-12 items-center">
            <img className="w-14 relative -top-4" src={fan} alt="" />
            <div className="flex flex-col">
              <div className="font-bold">EFFICIENT COOLING SYSTEMS</div>
              <div>
                Providing Innovation and cost effective heat exchange solutions.
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-12 items-center">
            <img className="w-10 mx-2 relative -top-4" src={wrench} alt="" />
            <div className="flex flex-col">
              <div className="font-bold">INTEGRATED MANUFACTURING</div>
              <div>
                Complete control on each & every element that provides endless
                customization.
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-12 items-center">
            <img className="w-14 relative -top-4" src={clip} alt="" />
            <div className="flex flex-col">
              <div className="font-bold">SUPERIOR QUALITY</div>
              <div>
                Our Satisfied Customers are the testament to our passion &
                reinforce our commitment to building the best.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
