"use client";
import Image from 'next/image'
import RootLayout from '../layout'
import Sidebar from './sidebar';
import Slider from './slider';


export default function Page() {
  return (
    <RootLayout>
      <div className="relative">
        {/* <Sidebar /> */}
        <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/bg.jpg)' }}>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] mb-4 lg:-mt-36"
            src="/logo.webp"
            alt="Lam7a"
            width={948}
            height={380}
            priority
          />
          <h1 className="text-white home-main-text p-2 md:text-2xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] lg:text-3xl mb-4 mt-6">
            A magazine for the students, by the students
          </h1>
          <a href='https://google.com' target='_blank' className="px-20 py-6 text-lg md:ext-2xl font-bold home-button rounded-[2rem] hover:drop-shadow-2xl hover:text-black/90">
            Reach out to us!
          </a>
        </div>


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
              <div className="flex flex-col py-[5%] justify-around items-center text-white text-wrap text-center">
                <div className="bg-customOrange w-[60%] rounded-lg px-4 py-8 mb-8">
                  <h3 className="font-bold text-xl">
                    Issue 8 Submission deadline is on xx/xx/xx!
                  </h3>
                  <div className="text-">
                    <p className='whitespace-pre-wrap'>
                      Submit your articles or photos
                    </p>
                    <p>to lam7a-mag@andrew.cmu.edu</p>
                  </div>
                </div>
                <div className="bg-customOrange w-[60%] rounded-lg px-4 py-8 mb-8">
                  <h3 className="font-bold text-xl">
                    <p>Issue 7 launch event will be on</p>
                    <p>04/10/23 in the West Walkway!</p>
                  </h3>
                </div>
                <div className="bg-customOrange w-[60%] rounded-lg px-4 py-8 mb-8">
                  <a className="font-bold text-xl">
                    View previous notices
                  </a>
                </div>
              </div>
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
