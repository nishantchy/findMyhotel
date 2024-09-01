import React from "react";
import HotelCard from "./HotelCard";
import FilterSidebar from "./FilterSideBar";
import Filter from "./Filter";

const HotelListing = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar className="w-full md:w-1/4" />
        <div className="w-full md:w-3/4">
          <div className="mb-4 flex justify-end">
            <Filter />
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <HotelCard key={i} />
            ))}
          </div>

          <div className="flex justify-center items-center">
            <button className="bg-primary text-white px-6 py-1 rounded-full hover:bg-white hover:text-primary transition duration-500 font-semibold  border-primary border-2 mt-[40px]">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelListing;
