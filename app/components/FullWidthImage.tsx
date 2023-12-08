import Image from 'next/image';

const FullWidthImage = ({ src }: { src: string }) => {
  return (
    <>
      <div className="relative w-full h-[50vh] overflow-hidden">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          alt="Lam7a"
        />
      </div>
    </>
  );
};

export default FullWidthImage;
