import Image from "next/image";
import React from "react";
import currentVideo from "../../assets/images/Youtube-player.png";
import Link from "next/link";

const channelVideo: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6 px-14 py-6">
      <Link href="/watch">
        <Image
          className="w-full h-auto cursor-pointer"
          src={currentVideo}
          alt="current video playing"
          width={200}
          height={200}
        />
      </Link>

      <div className="flex items-start w-full">
        <div>
          <h2 className="text-colorPrimary text-lg font-semibold">
            Blind Woodturner: Turning passion into fine art
          </h2>
          <p className="text-colorSecondary text-sm my-3">
            <span>576,969 views. </span>
            {" . "}
            <span>3 weeks ago</span>
          </p>
          <p className="text-colorPrimary text-base leading-5">
            Chris Fisher, also known as the Blind Woodturner, learned his craft
            by listening to hundreds of hours of YouTube videos and
            experimenting in his workshop. Now he&apos;s a YouTube creator
            himself, sells his products worldwide, and does demonstrations all
            around the country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default channelVideo;
