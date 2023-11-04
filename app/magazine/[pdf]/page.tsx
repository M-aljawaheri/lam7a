"use client";
import Slider from "@/app/components/slider";
import PdfViewer from "../../components/PdfViewer";
import Sidebar from "@/app/components/sidebar";
const Page = ({ params }: { params: { pdf: string } }) => {
  return (
    <>
      <Sidebar color="#000"/>
      <PdfViewer fileUrl={`/assets/${params.pdf}`} />
      <div className="flex flex-col h-max py-1 lg:pb-3.5 lg:pt-8 lg:px-20 bg-customOrange">
        <div className='mt-10'>
          <Slider/>
        </div>
      </div>
    </>
  );
};
export default Page;