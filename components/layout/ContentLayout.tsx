import React from "react";
import Card from "../ui/card";

const ContentLayout: React.FC = () => {
  return (
    <main
      id="contentLayout"
      className="bg-backgroundSecondary relative max-w-[84%] h-full left-[16%] top-[54px] px-4 py-8"
    >
      <Card />
    </main>
  );
};

export default ContentLayout;
