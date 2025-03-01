import {
  EXTRA_LINKS,
  FOOTER_LINKS,
  MORE_YOUTUBE,
  SIDEBAR_NAV,
  SUBSCRIPTIONS_LIST,
} from "@/constants/sidebar";
import { slicedSidebarNav } from "@/utils/sliceArray";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronDown } from "react-icons/hi2";

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <aside className="fixed h-full z-10">
      {isOpen ? (
        <div className="bg-backgroundPrimary flex flex-col lg:max-w-[16%] md:max-w-[30%] max-w-[50vw] h-full fixed overflow-hidden whitespace-nowrap scrollbar hover:overflow-y-scroll z-10">
          <div className="py-3 border-b border-backgroundAccent">
            {SIDEBAR_NAV.map((listItem) => {
              return (
                <Link
                  key={listItem.id}
                  href="#"
                  className="flex items-center text-colorPrimary hover:bg-backgroundAccent text-sm py-2 px-6"
                >
                  <listItem.icon className="mr-4 w-5 h-5" />
                  {listItem.name}
                </Link>
              );
            })}
          </div>

          <div className="py-2 border-b border-backgroundAccent">
            <h2 className="uppercase text-colorSecondary font-semibold text-sm pl-6 my-2">
              Subscriptions
            </h2>
            {SUBSCRIPTIONS_LIST.map((channel) => {
              return (
                <Link
                  key={channel.id}
                  href={channel?.link as string}
                  className="flex items-center text-colorPrimary hover:bg-backgroundAccent text-sm py-2 px-6"
                >
                  <Image
                    src={channel.image}
                    alt="youtube channel"
                    className="w-7 h-7 rounded-full mr-4"
                    width={60}
                    height={60}
                  />
                  {channel.name}
                </Link>
              );
            })}

            <Link
              href="#"
              className="flex items-center text-colorPrimary hover:bg-backgroundAccent text-sm py-2 px-6"
            >
              <HiOutlineChevronDown />
              <span className="ml-7">Show 13 more</span>
            </Link>
          </div>

          <div className="py-2 border-b border-backgroundAccent">
            <h2 className="uppercase text-colorSecondary font-semibold text-sm pl-6 my-2">
              More from YouTube
            </h2>
            {MORE_YOUTUBE.map((extra) => {
              return (
                <Link
                  key={extra.id}
                  href="#"
                  className="flex items-center text-colorPrimary hover:bg-backgroundAccent text-sm py-2 px-6"
                >
                  <extra.icon className="mr-4 w-5 h-5" />
                  {extra.name}
                </Link>
              );
            })}
          </div>

          <div className="py-2 border-b border-backgroundAccent">
            {EXTRA_LINKS.map((item) => {
              return (
                <Link
                  key={item.id}
                  href="#"
                  className="flex items-center text-colorPrimary hover:bg-backgroundAccent text-sm py-2 px-6"
                >
                  <item.icon className="mr-4 w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          <footer className="flex flex-col pb-12">
            <div className="flex flex-row flex-wrap items-center p-2">
              {FOOTER_LINKS.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href="#"
                    className="text-colorSecondary font-semibold text-xs px-3"
                  >
                    {link}
                  </Link>
                );
              })}
            </div>

            <Link
              href="#"
              className="text-left text-colorSecondary text-xs p-4"
            >
              &copy; 2025 Google LLC
            </Link>
          </footer>
        </div>
      ) : (
        <div className="bg-backgroundPrimary flex flex-col lg:max-w-fit md:max-w-[10%] max-w-16 h-full fixed overflow-hidden whitespace-nowrap z-10">
          <div className="py-3 border-b border-backgroundAccent">
            {slicedSidebarNav.map((listItem) => {
              return (
                <Link
                  key={listItem.id}
                  href="#"
                  className="flex flex-col justify-center items-center py-3 text-colorPrimary hover:bg-backgroundAccent text-sm"
                >
                  <listItem.icon className="w-5 h-5" />
                  <span className="text-[0.62rem] px-3">{listItem.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
