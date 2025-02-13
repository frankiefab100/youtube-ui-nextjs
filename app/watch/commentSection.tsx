import { COMMENTS } from "@/constants/playlist";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { MdOutlineSort } from "react-icons/md";

const CommentSection = () => {
  return (
    <section>
      <div className="flex text-colorSecondary text-sm whitespace-nowrap cursor-pointer my-4">
        <p className="flex items-center text-sm text-colorPrimary hover:text-colorSecondary">
          286 Comments
        </p>
        <div className="flex items-center uppercase font-semibold text-colorPrimary hover:text-colorSecondary ml-5">
          <MdOutlineSort className="mr-1 w-5 h-5" />
          Sort By
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row flex-nowrap justify-start items-start w-full py-3 cursor-pointer">
          <Image
            className="w-8 h-auto rounded-full"
            src="https://mighty.tools/mockmind-api/content/human/95.jpg"
            alt="audience photo"
            width={35}
            height={20}
          />

          <input
            type="text"
            placeholder="Add a public comment"
            className="bg-backgroundSecondary text-colorSecondary text-sm px-2 py-1 ml-2 w-full border-b border-colorSecondary outline:none focus:outline-none"
          />
        </div>

        {COMMENTS.map((commentItem) => {
          return (
            <div
              key={commentItem.id}
              className="flex flex-row flex-nowrap justify-start items-start w-full py-3 cursor-pointer"
            >
              <Image
                className="w-8 h-auto rounded-full"
                src={commentItem.img}
                alt="audience photo"
                width={35}
                height={20}
              />
              <div className="ml-2">
                <h2 className="text-colorPrimary text-base font-semibold leading-5 cursor-pointer">
                  {commentItem.name}
                  <span className="text-xs text-colorSecondary font-normal ml-2">
                    {commentItem.time}
                  </span>
                </h2>
                <p className="text-colorSecondary text-sm whitespace-nowrap cursor-pointer my-2">
                  {commentItem.comment}
                </p>
                <div className="flex text-colorSecondary text-sm whitespace-nowrap cursor-pointer">
                  <span className="flex">
                    <BiLike className="w-5 h-5 mr-1" /> {commentItem.likeCount}
                  </span>
                  <BiDislike className="mx-4 w-5 h-5" />
                  <Link href="#" className="uppercase text-sm">
                    Reply
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CommentSection;
