import Image from "next/image";
import currentVideo from "../../assets/images/Youtube-player.png";
import CreatorInfo from "@/components/ui/creatorInfo";

const VideoCard = () => {
  return (
    <div>
      <Image
        className="w-full h-auto cursor-pointer"
        src={currentVideo}
        alt="current video playing"
        width={200}
        height={200}
      />

      <CreatorInfo />
    </div>
  );
};

export default VideoCard;
