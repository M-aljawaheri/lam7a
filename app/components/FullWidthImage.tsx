import Image from "next/image";

const FullWidthImage = ({ src }: { src: string }) => {
  return (
    <>
      <div className="relative w-full h-[20vh] md:h-[50vh] overflow-hidden">
        <Image src={src} fill style={{ objectFit: "cover" }} alt="Lam7a" />
      </div>
    </>
  );
};

export default FullWidthImage;
