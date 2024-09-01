import HotelCards from "./HotelCards";

const HotelListings = () => {
  return (
    <div className="max-w-[1240px] mx-auto w-full">
      <h1 className="text-subtitle text-center text-primary my-[60px] font-semibold">
        Find Your Hotel
      </h1>
      <HotelCards />
      <div className="flex justify-center items-center">
        <button className="bg-primary text-white px-6 py-1 rounded-full hover:bg-white hover:text-primary transition duration-500 font-semibold  border-primary border-2 mt-[40px]">
          Load More
        </button>
      </div>
    </div>
  );
};

export default HotelListings;
