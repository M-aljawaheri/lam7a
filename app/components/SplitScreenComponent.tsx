// File: components/SplitScreenComponent.tsx

import React from "react";
import Image from "next/image";

type Location = "center" | "left" | "right";

type SplitScreenComponentProps = {
  title: string;
  location: Location;
  children: React.ReactNode;
  imageSrc: string;
};

const SplitScreenComponent: React.FC<SplitScreenComponentProps> = ({
  title,
  location,
  children,
  imageSrc,
}) => {
  const getLocationClass = (l: Location) => {
    if (l == "center") {
      return "md:justify-center";
    }
    if (l == "left") {
      return "md:justify-end";
    }
    if (l == "right") {
      return "md:justify-start";
    }
    return "";
  };

  const innerElement = (
    <div className="z-10 flex flex-col justify-center items-center w-1/2 p-8 text-center">
      <h1 className="z-20 uppercase text-white lg:text-8xl text-4xl font-bold mb-4 drop-shadow-xl">
        {title}
      </h1>
      {children}
    </div>
  );

  return (
    <div className="relative w-full h-screen lg:pb-3.5 lg:pt-8 lg:px-20 md:pl-8">
      <Image
        src={imageSrc}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 z-10"></div>

      <div className="z-20 flex md:flex-row flex-col h-full bg-black bg-opacity-20">
        <div
          className={`flex-1 flex justify-center ${getLocationClass(location)}`}
        >
          {innerElement}
        </div>
      </div>
    </div>
  );
};

export default SplitScreenComponent;
