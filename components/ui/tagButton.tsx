// "use client";
// import { CATEGORY_TAGS } from "@/constants/categoryTags";
// import Link from "next/link";
// import { useState } from "react";
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// export const Tags: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsToShow = 20;

//   const handleNext = () => {
//     if (currentIndex + itemsToShow < CATEGORY_TAGS.length) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="relative bg-backgroundAccent flex flex-row justify-evenly items-center px-6 py-3 max-w-full whitespace-nowrap overflow-hidden z-5">
//       {CATEGORY_TAGS.slice(currentIndex, currentIndex + itemsToShow).map(
//         (tag) => (
//           <Link
//             key={tag.id}
//             href="#"
//             role="button"
//             className={`${
//               tag.id === 1
//                 ? "bg-colorPrimary text-black border-none"
//                 : "bg-backgroundAccent text-colorPrimary border border-colorSecondary"
//             } px-3 py-1 rounded-full text-sm font-medium mx-2`}
//           >
//             {tag.label}
//           </Link>
//         )
//       )}

//       {currentIndex > 0 && (
//         <div className="absolute bg-backgroundPrimary left-0 flex items-center p-3">
//           <BiChevronLeft
//             className="text-colorSecondary w-8 h-8 cursor-pointer hover:text-colorPrimary"
//             onClick={handlePrev}
//           />
//         </div>
//       )}

//       {currentIndex + itemsToShow < CATEGORY_TAGS.length && (
//         <div className="absolute bg-backgroundPrimary right-0 flex items-center p-3">
//           <BiChevronRight
//             className="text-colorSecondary w-8 h-8 cursor-pointer hover:text-colorPrimary"
//             onClick={handleNext}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

"use client";
import { CATEGORY_TAGS } from "@/constants/categoryTags";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export const Tags: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(20);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(8);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(15);
      } else {
        setItemsToShow(20);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handleNext = () => {
    if (currentIndex + itemsToShow < CATEGORY_TAGS.length) {
      setCurrentIndex(currentIndex + itemsToShow);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(0, currentIndex - itemsToShow));
    }
  };

  const visibleTags = CATEGORY_TAGS.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  return (
    <div className="relative bg-backgroundAccent flex flex-row items-center px-6 py-3 max-w-full whitespace-nowrap overflow-hidden z-5">
      <div className="flex flex-row items-center md:space-x-3 space-x-2 w-full">
        {visibleTags.map((tag) => (
          <Link
            key={tag.id}
            href="#"
            role="button"
            className={`${
              tag.id === 1
                ? "bg-colorPrimary text-black border-none"
                : "bg-backgroundAccent text-colorPrimary border border-colorSecondary"
            } px-3 py-1 rounded-full text-sm font-medium`}
          >
            {tag.label}
          </Link>
        ))}
      </div>

      {currentIndex > 0 && (
        <div className="absolute bg-backgroundPrimary left-0 flex items-center p-3">
          <BiChevronLeft
            className="text-colorSecondary w-8 h-8 cursor-pointer hover:text-colorPrimary"
            onClick={handlePrev}
          />
        </div>
      )}

      {currentIndex + itemsToShow < CATEGORY_TAGS.length && (
        <div className="absolute bg-backgroundPrimary right-0 flex items-center p-3">
          <BiChevronRight
            className="text-colorSecondary w-8 h-8 cursor-pointer hover:text-colorPrimary"
            onClick={handleNext}
          />
        </div>
      )}
    </div>
  );
};
