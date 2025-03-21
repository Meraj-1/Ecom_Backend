import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img
            src={assets.logo}
            className="w-32 mb-5 cursor-pointer"
            alt="logo"
          />
          <p className="w-full md:w-2/3 text-gray-600">
            Forever – Your ultimate destination for quality and style. Discover
            timeless fashion and unbeatable deals every day. Shop with
            confidence, secure payments, and fast delivery. Join us in
            redefining shopping with elegance and trust.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <a class=" cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" href="/">           
              Home
            </a>

            <a class=" cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" href="/about">
              ABOUT_US
            </a>

            <a class=" cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" href="/delivery">
              DELIVERY
            </a>

            <a class=" cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" href="/policy">
              PRIVACY_POLICY
            </a>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <a className="cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
              +1-222-333-43
            </a>
            <a class=" cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
              forever@gmail.com
            </a>

            <a class=" cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
              Forever – Your ultimate destination
            </a>
          </ul>
        </div>
      </div>
      {/* <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @forever.com - All Right Reserved.
        </p>
      </div> */}
    </div>
  );
}

export default Footer;
