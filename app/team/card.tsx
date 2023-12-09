import React from 'react';
import Image from 'next/image';

interface CardProps {
  name: string;
  position: string;
  classYear: string;
  imageUrl: string | undefined;
  description: string;
}

const Card: React.FC<CardProps> = ({ name, imageUrl, description, classYear, position }) => {

  if (!imageUrl) {
    return (<div className='w-full md:w-1/2 lg:w-1/3 h-full lg:min-h-[55vh] flex flex-col justify-start p-10'>
      <div className='w-full group relative rounded-[10%] '>
        <div className="min-h-[55vh] border-customYellow border-4 rounded-[10%] mt-4 md:min-h-[45vh] lg:min-h-[65vh] dark:drop-shadow-[0_0_0.3rem_#ffffff70] mb-4"
        ></div>
        <div className="z-10 mt-4 rounded-[10%] absolute inset-0 opacity-100 bg-[#EAB58B] border-customOrange border-4 text-white flex flex-col items-begin justify-start">
          <h4 className="text-4xl mt-10 mb-2 font-bold text-center text-[#B22F04]">{name}</h4>
          <h4 className="text-2xl italic mb-2 font-bold text-center text-[#B22F04]">{position}</h4>
          <h4 className="text-2xl md:mb-5 mb-3 text-center text-[#B22F04]">@Class of {classYear}</h4>
          <span className='text-xl p-10 text-center text-black'>
            {description}
          </span>
        </div>
      </div>
    </div>);
  }


  return (
    <div className='w-full md:w-1/2 lg:w-1/3 h-full lg:min-h-[55vh] flex flex-col justify-start p-10'>
      <div className='w-full group relative rounded-[10%] '>
        <Image
          className="min-h-[55vh] border-customYellow border-4 rounded-[10%] mt-4 md:min-h-[45vh] lg:min-h-[65vh] dark:drop-shadow-[0_0_0.3rem_#ffffff70] mb-4"
          src={imageUrl}
          objectFit="cover"
          alt={name}
          width={948}
          height={380}
          priority
        />
        <div className="z-10 mt-4 rounded-[10%] absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#EAB58B] border-customOrange border-4 text-white flex flex-col items-begin justify-start">
          <h4 className="text-4xl mt-10 mb-2 font-bold text-center text-[#B22F04]">{name}</h4>
          <h4 className="text-2xl italic mb-2 font-bold text-center text-[#B22F04]">{position}</h4>
          <h4 className="text-2xl md:mb-5 mb-3 text-center text-[#B22F04]">@Class of {classYear}</h4>
          <span className='text-xl p-10 text-center text-black'>
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
