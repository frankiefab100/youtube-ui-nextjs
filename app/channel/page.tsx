import ChannelInfo from "./channelInfo";
import ChannelVideo from "./channelVideo";
import ChannelVideoList from "./channelVideoList";

const page = () => {
  return (
    <section
      id="channel"
      className="bg-backgroundSecondary relative max-w-[84%] h-full left-[16%]"
    >
      <ChannelInfo />
      <ChannelVideo />
      <ChannelVideoList />
      <ChannelVideoList />
    </section>
  );
};

export default page;
