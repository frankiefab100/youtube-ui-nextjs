import React from "react";
import { BiSearch, BiSolidMicrophone } from "react-icons/bi";

const Searchbar: React.FC = () => {
  return (
    <div className="w-full flex justify-center overflow-hidden">
      <input
        type="text"
        placeholder="Search"
        className="min-w-[30%] bg-black px-2 py-1 text-colorPrimary border-none focus:outline-backgroundAccent"
      />
      <div className="w-14 bg-backgroundAccent flex justify-center items-center border-backgroundSecondary">
        <BiSearch className="text-colorPrimary w-5 h-5 cursor-pointer" />
      </div>

      <div className="bg-black flex justify-center items-center rounded-full p-2 mx-2">
        <BiSolidMicrophone className="text-colorPrimary w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default Searchbar;
