"use client";
import Image from "next/image";
import React, { useState } from "react";
import coverPhoto from "../../assets/images/cover-photo.png";
import { BiSearch } from "react-icons/bi";

const TABS: string[] = [
  "Home",
  "Videos",
  "Playlists",
  "Community",
  "Channels",
  "About",
];

const ChannelInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex justify-center items-center">
        <Image
          className="w-full h-auto"
          src={coverPhoto}
          alt="coverphoto"
          width={300}
          height={300}
          style={{ maxWidth: "100%" }}
        />
      </div>
      <div className="bg-backgroundAccent flex flex-col items-center px-4 sm:px-8 md:px-14">
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

        <nav className="w-full scrollbar overflow-x-auto">
          <ul className="flex space-x-4">
            {TABS.map((tab, index) => (
              <li key={index}>
                <button
                  className={`
                          uppercase text-sm px-4 py-2 text-colorPrimary
                          ${
                            activeTab === index
                              ? "border-b border-colorPrimary text-colorPrimary"
                              : "text-colorSecondary"
                          }
                        `}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              </li>
            ))}
            <div className="flex items-center">
              <BiSearch className="text-colorSecondary w-5 h-5 cursor-pointer hover:text-colorPrimary" />
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ChannelInfo;
