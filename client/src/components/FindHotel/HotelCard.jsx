import React from "react";
import Image from "next/image";
import hotelImage from "../../../public/assets/images/hero.jpg";
import { TiLocation } from "react-icons/ti";

const HotelCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/3 h-48 md:h-auto flex justify-center items-center">
        <Image
          src={hotelImage}
          width={260}
          height={175}
          alt="Hotel Annapurna"
          objectFit="cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <h2 className="text-xl font-semibold mb-2">Hotel Annapurna</h2>
        <p className="text-gray-600 mb-2 max-w-[500px] text-paragraph">
          Nestled in the heart of Kathmandu, this location offers breathtaking
          views and captures the essence of the city's rich cultural and vibrant
          life.
        </p>
        <div className="flex items-center mb-2">
          <TiLocation
            style={{ width: "20px", height: "17px" }}
            className="text-primary"
          />
          <span className="ml-1 text-small font-semibold">
            Durbar Marg, Kathmandu
          </span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-small font-semibold">5 Stars</span>
        </div>
      </div>
      <div className="p-4 bg-gray-50 flex flex-col justify-between">
        <div className="text-start md:text-right">
          <p className="text-lg font-bold text-gray-900">Rs. 10000</p>
          <p className="text-sm text-gray-600">per person</p>
        </div>
        <button className="bg-primary text-white px-6 py-1 rounded-full hover:bg-white hover:text-primary transition duration-500 font-semibold  border-primary border-2 mt-[40px]">
          Details
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
