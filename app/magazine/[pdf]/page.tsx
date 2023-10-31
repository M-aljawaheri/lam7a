"use client";
import useCheckMobileScreen from "@/app/components/useCheckMobileScreen";
import MobilePdfViewer from "../../components/mobilePdfViewer";
import PdfViewer from "../../components/PdfViewer";
import Sidebar from "@/app/components/sidebar";
const Page = ({ params }: { params: { pdf: string } }) => {
  const isMobile = useCheckMobileScreen();
  let viewer = <PdfViewer fileUrl={`/assets/${params.pdf}`} />;
  if (isMobile) {
    viewer = <MobilePdfViewer fileUrl={`/assets/${params.pdf}`} />;
  }

  return (
    <>
      <Sidebar color="#000" />
      {viewer}
    </>
  );
};
export default Page;