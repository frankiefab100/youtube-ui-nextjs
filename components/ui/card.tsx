import { VIDEO_DETAILS } from "@/constants/videoDetails";
import { VideoProps } from "@/types/index";
import Image from "next/image";
import React from "react";

const Card: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {VIDEO_DETAILS.map((videoItem: VideoProps) => {
        return (
          <div key={videoItem.id} className="flex flex-col">
            <div className="relative">
              <Image
                className="block w-full h-full cursor-pointer"
                src={videoItem.thumbnail}
                alt="video thumbnail"
                width={50}
                height={50}
              />
              <div className="absolute right-2 bottom-1 bg-backgroundPrimary text-colorPrimary text-sm p-1">
                {videoItem.duration}
              </div>
            </div>

            <div className="flex flex-row flex-nowrap justify-start items-start w-full pt-3 cursor-pointer">
              <Image
                className="w-8 h-auto rounded-full"
                src={videoItem.creatorImg}
                alt="creator photo"
                width={35}
                height={20}
              />
              <div className="ml-2">
                <h2 className="text-colorPrimary text-base font-semibold mb-1 leading-5 cursor-pointer">
                  {videoItem.title}
                </h2>
                <p className="text-colorSecondary text-sm whitespace-nowrap cursor-pointer">
                  {videoItem.creatorName}
                </p>
                <p className="text-colorSecondary text-sm whitespace-nowrap cursor-pointer">
                  <span>{videoItem.viewCount}</span>
                  {" . "}
                  <span>{videoItem.timeline}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
