import React from "react";

function Contact() {
  return (
    <>
      <div className="h-screen items-center justify-center">
      <h1 className='text-2xl md:text-4xl'>Contact Us{" "}
      </h1>
        <label className="input input-bordered flex items-center gap-2 w-80 px-3 py-1 border rounded-md outline-none">
          Name
          <input type="text" className="grow" placeholder="Enter your name" />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-80 px-3 py-1 border rounded-md outline-none">
          Email
          <input type="text" className="grow" placeholder="Email address" />
        </label>
        <textarea
          className="textarea textarea-bordered w-80 px-3 py-1 border rounded-md outline-none"
          placeholder="Type your message"
        ></textarea>
      </div>
    </>
  );
}

export default Contact;
