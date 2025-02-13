import Image from "next/image";
import React from "react";

const CreatorInfo = () => {
  return (
    <div className="flex justify-between items-center w-full my-4 max-w-screen-xl">
      <div className="flex items-center">
        <Image
          className="w-12 h-auto rounded-full"
          src="https://mighty.tools/mockmind-api/content/human/112.jpg"
          alt="creator photo"
          width={35}
          height={20}
        />
        <div className="ml-3">
          <h2 className="text-colorPrimary text-base font-semibold leading-5 cursor-pointer max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl truncate">
            Marcus Levin
          </h2>
          <p className="text-colorSecondary text-sm cursor-pointer max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl truncate">
            1.2M subscribers
          </p>
        </div>
      </div>

      <button
        type="button"
        className="uppercase text-sm font-semibold text-colorPrimary bg-red-600 py-2 px-3"
      >
        Subscribe
      </button>
    </div>
  );
};

export default CreatorInfo;
