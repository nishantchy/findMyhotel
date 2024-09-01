import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="max-w-[300px] mx-auto w-full rounded-lg shadow-xl p-4 mt-[60px]">
      <h3 className="text-[26px] text-start text-primary  mb-[20px] font-semibold">
        Contact Details
      </h3>
      <p className=" text-left">
        <div className="flex items-center gap-x-3">
          <MdMarkEmailUnread
            style={{ width: "18px", height: "15px" }}
            className="text-primary"
          />
          <p className="leading-[32px] text-[16px] text-gray-600 ">
            info@gokarna.net
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <FaPhoneAlt
            style={{ width: "18px", height: "15px" }}
            className="text-primary"
          />
          <p className="leading-[32px] text-[16px] text-gray-600 ">
            +97714451212
          </p>
        </div>
      </p>
    </div>
  );
};

export default Contacts;
