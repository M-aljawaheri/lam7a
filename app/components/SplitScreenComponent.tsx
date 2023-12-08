// File: components/SplitScreenComponent.tsx

import React from 'react';
import Image from 'next/image';

type SplitScreenComponentProps = {
    title: string;
    isLeft: boolean;
    children: React.ReactNode;
    imageSrc: string; // New prop for the image source
};

const SplitScreenComponent: React.FC<SplitScreenComponentProps> = ({ title, isLeft, children, imageSrc }) => {

    const innerElement =
        <div className="z-10 flex flex-col justify-center items-center w-1/2 p-8 text-center">
            <h1 className="z-20 uppercase text-white lg:text-8xl text-5xl font-bold mb-4">{title}</h1>
            {children}
        </div>

    return (
        <div className="relative w-full h-screen lg:pb-3.5 lg:pt-8 lg:px-20 md:pl-8">
            {/* Background Image */}
            <Image src={imageSrc} alt="Background" layout="fill" objectFit="cover" className="absolute z-0" />

            {/* Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-10"></div>


            {/* Left and Right Content Containers */}
            <div className="z-20 flex md:flex-row flex-col h-full bg-black bg-opacity-20">
                <div className={`flex-1 flex justify-center ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                    {innerElement}
                </div>
            </div>
        </div>
    );
};

export default SplitScreenComponent;
