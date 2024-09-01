import Contacts from "@/components/HotelDetails/Contacts";
import Description from "@/components/HotelDetails/Description";
import Hero from "@/components/HotelDetails/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <div className="flex justify-start items-start max-w-[1240px] mx-auto w-full">
        <Description />
        <Contacts />
      </div>
    </div>
  );
};

export default page;
