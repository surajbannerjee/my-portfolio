import MainContent from "@/components/MainContant/MainContant";
import SideBarInfoBox from "@/components/SideBarInfoBox/SideBarInfoBox";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SideBarInfoBox />
      <MainContent />
    </div>
  );
}
