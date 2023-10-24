import React from 'react';
import Image from 'next/image';

interface CardProps {
  name: string;
  imageUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ name, imageUrl, description }) => {
  return (
    <div className='w-full md:w-1/2 lg:w-1/3 h-full lg:min-h-[55vh] flex flex-col justify-begin items-center p-10'>
      <div className='w-full group relative rounded-[10%]'>
        <Image
          className="min-h-[55vh] rounded-[10%] mt-4 md:min-h-[45vh] lg:min-h-[65vh] dark:drop-shadow-[0_0_0.3rem_#ffffff70] mb-4"
          src={imageUrl}
          alt={name}
          width={948}
          height={380}
          priority
        />
        <div className="z-10 mt-4 rounded-[10%] absolute inset-0 opacity-0 group-hover:opacity-100 bg-customOrange text-white flex flex-col items-center justify-center">
          <h4 className="text-4xl mb-10 font-bold font-['Brush_Script_MT'] text-center">{name}</h4>
          <span className='text-2xl p-10 text-center'>
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
