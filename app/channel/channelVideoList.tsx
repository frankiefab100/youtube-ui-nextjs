import { slicedVideoDetails } from "@/utils/sliceArray";
import Image from "next/image";
import { ImPlay3 } from "react-icons/im";

const ChannelVideoList: React.FC = () => {
  return (
    <div className="bg-backgroundSecondary relative px-14 py-4">
      <div className="flex items-center justify-start space-x-3 my-3">
        <h2 className="inline text-colorPrimary text-base font-semibold leading-5">
          Search On &apos;21
        </h2>
        <ImPlay3 className="text-colorSecondary h-5 w-5 cursor-pointer" />
        <span className="text-colorSecondary text-base uppercase cursor-pointer">
          Play All
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 pb-6 border-b border-backgroundAccent">
        {slicedVideoDetails.map((videoItem) => {
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
                <div className="absolute right-2 bottom-1 bg-backgroundPrimary text-colorPrimary text-xs p-1">
                  {videoItem.duration}
                </div>
              </div>

              <div className="flex flex-row flex-nowrap justify-start items-start w-full pt-3 cursor-pointer">
                <div className="ml-2">
                  <h2 className="text-colorPrimary text-base font-semibold mb-1 leading-5 cursor-pointer line-clamp-2">
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
    </div>
  );
};

export default ChannelVideoList;
