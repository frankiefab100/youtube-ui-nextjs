"use client";
import React, { useState } from "react";
import Image from "next/image";
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
      <div className="flex justify-center items-center right-0 z-10">
        <Image
          className="w-full h-auto"
          src={coverPhoto}
          alt="coverphoto"
          width={300}
          height={300}
        />
      </div>

      <div className="bg-backgroundAccent flex flex-col flex-wrap px-14">
        <div className="flex justify-between items-center my-4">
          <div className="flex items-center">
            <Image
              className="w-12 h-auto rounded-full"
              src="https://mighty.tools/mockmind-api/content/human/112.jpg"
              alt="creator photo"
              width={35}
              height={20}
            />
            <div className="ml-3">
              <h2 className="text-colorPrimary text-base font-semibold leading-5 cursor-pointer">
                Marcus Levin
              </h2>
              <p className="text-colorSecondary text-sm whitespace-nowrap cursor-pointer">
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

        <nav>
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

      {/* SELECTED VIDEO */}
    </div>
  );
};

export default ChannelInfo;
