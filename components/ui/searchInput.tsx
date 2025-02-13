import React from "react";
import { BiSearch, BiSolidMicrophone } from "react-icons/bi";

const Searchbar: React.FC = () => {
  return (
    <div className="w-full flex justify-center overflow-hidden">
      <input
        type="text"
        placeholder="Search"
        className="min-w-[30%] bg-black lg:px-2 lg:py-1 py-0 px-1 ml-4 md:text-base text-sm text-colorPrimary border-none focus:outline-backgroundAccent"
      />
      <div className="lg:w-14 w-8 bg-backgroundAccent flex justify-center items-center border-backgroundSecondary">
        <BiSearch className="text-colorPrimary lg:w-5 lg:h-5 w-4 h-4 cursor-pointer" />
      </div>

      <div className="bg-black flex justify-center items-center rounded-full lg:p-2 p-1 mx-2">
        <BiSolidMicrophone className="text-colorPrimary lg:w-5 lg:h-5 w-4 h-4 cursor-pointer" />
      </div>
    </div>
  );
};

export default Searchbar;
