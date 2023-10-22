// export default function Page({ params }: { params: { pdf: string } }) {
//     return <div>My Post: {params.pdf}</div>
//   }
"use client";
import PdfViewer from "../../components/PdfViewer";
const Page = ({ params }: { params: { pdf: string } }) => {
  return (
    <>
      <PdfViewer fileUrl={`/assets/${params.pdf}`} />
    </>
  );
};
export default Page;