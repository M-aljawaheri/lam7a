import RootLayout from "../layout";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Card from "./card";
import { teamMembers } from "@/data/team";
import Gallery from "../components/Gallery";
import FullWidthImage from "../components/FullWidthImage";
import Footer from "../components/footer_new";

export default function Page() {
  return (
    <RootLayout>
      <div className="relative">
        <Sidebar />
        <Header />
        <div className="flex flex-col h-max py-1 lg:pb-3.5 lg:pt-8 lg:px-20 bg-[#EA9959]">
          <h4 className="text-white mt-6 md:text-8xl text-4xl font-bold uppercase">
            Meet the Team
          </h4>
          <div className="flex flex-row flex-wrap justify-between align-middle">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                name={member.name}
                imageUrl={member.imageURL}
                classYear={member.classYear}
                position={member.position}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </div>
      <Gallery />
      <FullWidthImage src="/assets/bg3.webp" />
      <Footer />
    </RootLayout>
  );
}
