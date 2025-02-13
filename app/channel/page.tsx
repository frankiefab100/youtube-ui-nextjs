import ChannelInfo from "./channelInfo";
import ChannelVideo from "./channelVideo";
import ChannelVideoList from "./channelVideoList";

const page = () => {
  return (
    <section
      id="channel"
      className="bg-backgroundSecondary relative max-w-fit h-full"
    >
      <ChannelInfo />
      <ChannelVideo />
      <ChannelVideoList />
      <ChannelVideoList />
    </section>
  );
};

export default page;
