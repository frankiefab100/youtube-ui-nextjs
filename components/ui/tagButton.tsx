import { CATEGORY_TAGS } from "@/constants/categoryTags";
import Link from "next/link";

export const Tags: React.FC = () => {
  return (
    <div className="bg-backgroundAccent flex flex-row flex-nowrap justify-evenly items-center px-6 py-3 fixed top-14 right-0 left-[16%] whitespace-nowrap overflow-hidden z-10">
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
    </div>
  );
};
