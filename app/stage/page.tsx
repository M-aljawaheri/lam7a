"use client";
import Image from 'next/image'
import RootLayout from '../layout'
// import Sidebar from './sidebar';
import Slider from '../somefolder/slider';
import Header from '../components/header';
import Notices from '../components/notices';


export default function Page() {
  return (
    <RootLayout>
      <div className="relative">
        {/* <Sidebar /> */}
        <Header />
        <div className="flex flex-col h-max py-1 lg:pb-3.5 lg:pt-8 lg:px-20 bg-customOrange">
          <h4 className="text-white text-7xl text-center font-['Brush_Script_MT']" >Magazine Archive</h4>
          <div className='mt-10'>
            <Slider />
          </div>
        </div>

        <div className="flex-1 h-[80%] bg-[#ECE5DD] pt-[2%]">
          <div className="flex items-start flex-wrap h-full justify-center sm:py-1 lg:px-20 lg:pb-3.5 lg:pt-8">
            <div className='w-full lg:w-1/2  h-full border-solid border-2'>
              <h4 className='text-customOrange text-7xl text-center font-["Brush_Script_MT"]'>Notices</h4>
              <Notices/>
            </div>
            <div className='w-full lg:w-1/2 h-full border-solid border-2 flex flex-col justify-begin items-center'>
              <h4 className='text-[#ABB68C] text-7xl text-center mb-[5%] font-["Brush_Script_MT"]'>Photo Gallery</h4>
              <div className='view-more-parent w-[75%] h-[75%] relative'>
                <Image
                  className="overflow-hidden dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                  src="/gallery-prev.jpg"
                  alt="Image"
                  width={1500}
                  height={1500}
                />
                <div className='view-more-overlay'></div>
                <div className="view-more absolute  cursor-pointer top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                  <a href='/gallery' className="font-bold text-3xl">View More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}
