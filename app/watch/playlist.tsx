import { PLAYLIST } from "@/constants/playlist";
import Image from "next/image";
import React from "react";

const Playlist = () => {
  return (
    <div>
      {PLAYLIST.map((video) => {
        return (
          <div key={video.id} className="flex items-center py-1">
            <div className="relative">
              <Image
                className="block w-full h-full cursor-pointer"
                src={video.thumbnail}
                alt="video thumbnail"
                width={200}
                height={200}
              />
              <div className="absolute right-1 bottom-1 bg-backgroundPrimary text-colorPrimary text-xs p-1">
                {video.duration}
              </div>
            </div>

            <div className="flex cursor-pointer">
              <div className="ml-2">
                <h2 className="text-colorPrimary text-base font-semibold leading-5 cursor-pointer">
                  {video.title}
                </h2>
                <p className="text-colorSecondary text-sm whitespace-nowrap cursor-pointer my-2">
                  {video.creatorName}
                </p>
                <p className="text-colorSecondary text-sm whitespace-nowrap cursor-pointer">
                  <span>{video.viewCount}</span>
                  {" . "}
                  <span>{video.timeline}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Playlist;
