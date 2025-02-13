"use client";
import Image from "next/image";
import React, { useState } from "react";
import coverPhoto from "../../assets/images/cover-photo.png";
import { BiSearch } from "react-icons/bi";
import CreatorInfo from "@/components/ui/creatorInfo";

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
        <CreatorInfo />

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
