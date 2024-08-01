// import { UserButton } from "@clerk/nextjs";

import Image from "next/image";
import logo from "../../../public/assets/images/logo-header.png";
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Image src={logo} alt="Logo" width={100} height={100} />
          </div>
          <div className="flex items-center">
            {/* <UserButton afterSignOutUrl="/" /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
