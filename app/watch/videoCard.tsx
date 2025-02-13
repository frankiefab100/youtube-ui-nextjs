import Image from "next/image";
import currentVideo from "../../assets/images/Youtube-player.png";
import CreatorInfo from "@/components/ui/creatorInfo";
import Link from "next/link";
import { REACTIONS } from "@/constants/playlist";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";

const VideoCard = () => {
  return (
    <div className="py-3 border-b border-backgroundAccent">
      <Image
        className="w-full h-auto cursor-pointer"
        src={currentVideo}
        alt="current video playing"
        width={200}
        height={200}
      />

      <div className="py-3 border-b border-backgroundAccent">
        <h2 className="text-colorPrimary text-base font-semibold leading-5 cursor-pointer">
          Blind Woodturner: Turning passion into fine art
        </h2>
        <div className="flex justify-between items-center">
          <p className="text-colorSecondary text-sm whitespace-nowrap cursor-pointer my-2">
            <span>576,969 views</span>
            {" . "}
            <span>Oct 8, 2021</span>
          </p>
          <div className="flex text-colorSecondary text-sm whitespace-nowrap cursor-pointer">
            {REACTIONS.map((reaction) => {
              return (
                <Link
                  key={reaction.id}
                  href="#"
                  className="flex items-center text-sm text-colorPrimary hover:text-colorSecondary md:px-2 px-1"
                >
                  <reaction.icon className="mr-1 w-5 h-5" />
                  {reaction.name}
                </Link>
              );
            })}
            <div className="flex items-center">
              <HiOutlineEllipsisHorizontal className="mr-1 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <CreatorInfo />
      <div className="ml-[3.8rem]">
        <p className="text-colorPrimary text-base leading-5 mb-2">
          Chris Fisher, also known as the Blind Woodturner, learned his craft by
          listening to hundreds of hours of YouTube videos and experimenting in
          his workshop. Now he&apos;s a YouTube creator himself, sells his
          products worldwide, and does demonstrations all around the country.
        </p>
        <Link
          href="#"
          className="uppercase text-sm font-semibold text-colorSecondary"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
