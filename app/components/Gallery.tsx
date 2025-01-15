import React from "react";
import Image from "next/image";

// A tiny helper component to replicate the old responsive + objectFit behavior
function GalleryImage({
  src,
  alt,
  width,
  height,
  className = "",
  style = {},
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{
        width: "100%",
        height: "auto",
        objectFit: "cover",
        ...style,
      }}
    />
  );
}

const Gallery = () => {
  const secondRowImages = [
    { src: "/assets/mainpage/21.jpeg", alt: "Image 1" },
    { src: "/assets/mainpage/22.jpeg", alt: "Image 2" },
    { src: "/assets/mainpage/23.jpeg", alt: "Image 3" },
    { src: "/assets/mainpage/24.jpeg", alt: "Image 4" },
  ];

  return (
    <div className="flex-1 h-[80%] bg-[#EAB58B] pt-[2%]">
      <div className="w-full py-1 lg:pb-3.5 lg:pt-8 lg:px-20 md:pl-8">
        {/* First Row */}
        <div className="flex flex-col justify-center md:flex-row md:justify-between items-center max-h-[35%]">
          {/* First Image */}
          <div className="w-[90%] md:flex-1 md:w-[40%] md:pr-8">
            <GalleryImage
              className="rounded-xl"
              src="/assets/mainpage/1.jpeg"
              alt="First"
              width={100}
              height={50}
            />
          </div>

          {/* Second Image (hidden on small screens) */}
          <div className="hidden md:block md:flex-1 w-[40%] md:pr-8">
            <GalleryImage
              className="rounded-xl"
              src="/assets/mainpage/2.jpeg"
              alt="Second"
              width={100}
              height={50}
            />
          </div>

          {/* Third Section: Title and Button */}
          <div className="flex-1 max-w-[50%] md:max-w-[25%] flex flex-col items-center md:pr-8">
            <h2 className="text-xl md:text-4xl xl:text-6xl font-bold my-2 text-white">
              PHOTO GALLERY
            </h2>
            <a
              href="/gallery"
              className="block text-black w-full mb-5 text-center bg-[#ECE5DD] p-4 font-bold uppercase"
            >
              DISCOVER MORE
            </a>
          </div>
        </div>

        {/* Second Row: 4 Square Images */}
        <div className="hidden md:flex justify-between mt-4 max-h-[30%]">
          {secondRowImages.map((img, i) => (
            <div
              key={i}
              className="flex-1 pr-8 max-h-[30%] aspect-square max-w-[25%]"
            >
              <GalleryImage
                className="rounded-xl aspect-square"
                src={img.src}
                alt={img.alt}
                width={50}
                height={50}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
