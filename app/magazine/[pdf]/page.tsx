"use client";
import Slider from "@/app/components/slider";
import PdfViewer from "../../components/PdfViewer";
const Page = ({ params }: { params: { pdf: string } }) => {
  return (
    <>
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