import { CATEGORY_TAGS } from "@/constants/categoryTags";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export const Tags: React.FC = () => {
  return (
    <div className="relative">
      <div className="bg-backgroundAccent flex flex-row justify-evenly items-center px-6 py-3 fixed right-0 left-[16%] whitespace-nowrap overflow-hidden z-10">
        {CATEGORY_TAGS.map((tag, index) => {
          return (
            <Link
              key={index}
              href="#"
              role="button"
              className="first-of-type:bg-colorPrimary first-of-type:text-black first-of-type:border-none text-colorPrimary bg-backgroundAccent border border-colorSecondary px-3 py-1 rounded-full text-sm font-medium mr-4"
            >
              {tag}
            </Link>
          );
        })}

        <div className="absolute bg-backgroundPrimary right-0 flex items-center p-3">
          <BiChevronRight className="text-colorSecondary w-8 h-8 cursor-pointer hover:text-colorPrimary" />
        </div>
      </div>
    </div>
  );
};
