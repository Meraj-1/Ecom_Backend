import React from "react";

function NewsletterBox() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center ">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Stay updated with the latest deals and offers. Enter your email to
        receive exclusive discounts and promotions directly in your inbox.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 boder pl-3"
      >
        <input 
          className="w-full border-b p-4 sm:flex-1 outline-none"
          type="emai"
          placeholder="Enter Your Email"
          required
        />
        <button
          type="submit"
          className="bg-black cursor-pointer border transition-colors duration-300 rounded-md font-bold hover:text-black hover:bg-white  text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsletterBox;
