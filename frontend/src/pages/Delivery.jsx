import React from "react";
import { Truck, MapPin, Clock } from "lucide-react";
import Title from "../components/Title";

const DeliveryPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-black">
      <div className="text-4xl px-4  cursor-pointer mb-3">
        {/* <Title text1="Deliv" text2="ery"/> */}
        </div>
      <div className="p-6 rounded-lg  border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <Truck className="w-8 h-8 text-black" />
          <h2 className="text-2xl py-3 text-black font-semibold">Fast & Reliable Delivery</h2>
        </div>
        <p className="mt-2 text-sm  text-gray-700">
        We ensure timely delivery of your products with real-time tracking
         and secure handling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className=" p-6 rounded-lg  border-b border-gray-900">
          <div className="flex items-center space-x-4">
            <MapPin className="w-8 h-8 text-black" />
            <h2 className="text-2xl font-semibold">Track Your Order</h2>
          </div>
          <p className="mt-2 text-sm">
            Enter your tracking number to get live updates on your package.
          </p>
          <button className="mt-4 bg-black hover:bg-white hover:text-black cursor-pointer border-b text-sm text-white px-4 py-2 rounded">
            Track Order
          </button>
        </div>

        <div className=" p-6 rounded-lg border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <Clock className="w-8 h-8 text-balck" />
            <h2 className="text-2xl font-semibold ">Estimated Delivery Time</h2>
          </div>
          <p className="mt-2 text-sm">
            Standard delivery: 3-5 business days <br />
            Express delivery: 1-2 business days
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
