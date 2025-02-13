import CommentSection from "./commentSection";
import Playlist from "./playlist";
import VideoCard from "./videoCard";

const page = () => {
  return (
    <section
      id="channel"
      className="bg-backgroundSecondary grid md:grid-cols-2 grid-cols-1 gap-8 h-full lg:px-40 px-4 py-8"
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
