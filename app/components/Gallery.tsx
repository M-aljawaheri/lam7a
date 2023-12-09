import React from 'react'
import Image from 'next/image'

const Gallery = () => {
  return (
    <div className="flex-1 h-[80%] bg-[#EAB58B] pt-[2%]">
    <div className="w-full py-1 lg:pb-3.5 lg:pt-8 lg:px-20 md:pl-8">
      <div className="flex flex-col justify-center md:flex-row md:justify-between items-center max-h-[35%]">
        {/* First Image */}
        <div className="w-[90%] md:flex-1 md:w-[40%] md:pr-8">
          <Image className="rounded-xl" src="/assets/mainpage/1.jpeg" alt="First" layout="responsive" width={100} height={50} objectFit="cover" />
        </div>
        {/* Second Image */}
        <div className="hidden md:block md:flex-1 w-[40%] md:pr-8">
          <Image className="rounded-xl" src="/assets/mainpage/2.jpeg" alt="Second" layout="responsive" width={100} height={50} objectFit="cover" />
        </div>
        {/* Third Image with Title and Button */}
        <div className="flex-1 max-w-[50%] md:max-w-[25%] flex flex-col items-center md:pr-8">
          <h2 className="text-xl md:text-6xl font-bold my-2">PHOTO GALLERY</h2>
          <a href='/gallery' className='block text-black w-full mb-5 text-center bg-[#ECE5DD] p-4 font-bold uppercase'>
            DISCOVER MORE
          </a>
        </div>
      </div>

      {/* Second Row: 4 Square Images */}
      <div className="hidden md:flex justify-between mt-4 max-h-[30%]">
        {/* Image 1 */}
        <div className="flex-1 pr-8 max-h-[30%] aspect-square  max-w-[25%]">
          <Image className="rounded-xl aspect-square" src="/assets/mainpage/21.jpeg" alt="Image 1" layout="responsive"  objectFit="cover" width={50} height={50} />
        </div>

        {/* Image 2 */}
        <div className="flex-1 pr-8 aspect-square">
          <Image className="rounded-xl aspect-square" src="/assets/mainpage/22.jpeg" alt="Image 2" layout="responsive" width={50} height={50} objectFit="cover" />
        </div>

        {/* Image 3 */}
        <div className="flex-1 pr-8">
          <Image className="rounded-xl aspect-square" src="/assets/mainpage/23.jpeg" alt="Image 3" layout="responsive" width={50} height={50} objectFit="cover" />
        </div>

        {/* Image 4 */}
        <div className="flex-1 pr-8">
          <Image className="rounded-xl aspect-square" src="/assets/mainpage/24.jpeg" alt="Image 4" layout="responsive" width={50} height={50} objectFit="cover" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Gallery