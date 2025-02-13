import CommentSection from "./commentSection";
import Playlist from "./playlist";
import VideoCard from "./videoCard";

const page = () => {
  return (
    <section
      id="channel"
      className="bg-backgroundSecondary grid md:grid-cols-2 grid-cols-1 h-full px-44"
    >
      <div>
        <VideoCard />
        <CommentSection />
      </div>
      <Playlist />
    </section>
  );
};

export default page;
