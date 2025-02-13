import React from "react";
import Card from "../ui/card";

const ContentLayout: React.FC = () => {
  return (
    <main
      id="contentLayout"
      className="bg-backgroundSecondary relative h-full px-4 py-8 -z-10"
    >
      <Card />
    </main>
  );
};

export default ContentLayout;
