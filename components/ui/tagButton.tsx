"use client";
import { CATEGORY_TAGS } from "@/constants/categoryTags";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export const Tags: React.FC<{ id: number; label: string }> = () => {
  return (
    <div className="relative bg-backgroundAccent flex flex-row justify-evenly items-center px-6 py-3 max-w-full whitespace-nowrap overflow-hidden z-5">
      {CATEGORY_TAGS.map((tag) => {
        return (
          <Link
            key={tag.id}
            href="#"
            role="button"
            className={`${
              tag.id === 1
                ? "bg-colorPrimary text-black border-none"
                : "bg-backgroundAccent text-colorPrimary border border-colorSecondary"
            } px-3 py-1 rounded-full text-sm font-medium mx-2`}
          >
            {tag.label}
          </Link>
        );
      })}

      <div className="absolute bg-backgroundPrimary right-0 flex items-center p-3">
        <BiChevronRight className="text-colorSecondary w-8 h-8 cursor-pointer hover:text-colorPrimary" />
      </div>
    </div>
  );
};
