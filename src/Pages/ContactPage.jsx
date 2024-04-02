import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center mb-16">
      <h1 className="text-4xl text-center my-4">Contact Us</h1>
      <div className="mb-10 bg-gray-300 md:w-1/4  mx-4 px-4 p-2 rounded-xl">
        <form action="" className="flex flex-col items-center mt-6">
          <div className="my-2">
            <label>Name:</label>
            <input
              type="text"
              className="border border-black ml-2 rounded-lg px-2 mx-1"
            />
          </div>
          <div className="my-2">
            <label>Email: </label>
            <input
              type="text"
              className="border border-black ml-2 rounded-lg px-2 mx-1"
            />
          </div>
          <div className="my-2">
            <label>Phone:</label>
            <input
              type="text"
              className="border border-black ml-2 rounded-lg px-2 mx-1"
            />
          </div>
          <div className="my-2 flex flex-col">
            <label>leave a message:</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border border-black p-2 rounded-lg"
            ></textarea>
            <button className=" border bg-white w-32 m-auto mt-4 rounded-xl text-black">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
