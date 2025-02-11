import Navbar from "@/components/global/Navbar";
import Sidebar from "@/components/global/Sidebar";
import ContentLayout from "@/components/layout/ContentLayout";
import { Tags } from "@/components/ui/tagButton";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Tags />
      <ContentLayout />
    </div>
  );
}
