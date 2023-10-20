"use client";
import Image from 'next/image'
import RootLayout from '../layout'
import Sidebar from './sidebar';


export default function Page() {
  return (
    <RootLayout>
      <div className="relative">
      <Sidebar />
        <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/bg.jpg)' }}>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] mb-4 -mt-36"
            src="/logo.webp"
            alt="Lam7a"
            width={948}
            height={380}
            priority
          />
          <h1 className="text-base home-main-text p-2 md:text-2xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] lg:text-3xl mb-4 mt-6">
            A magazine for the students, by the students
          </h1>
          <a href='https://google.com' target='_blank' className="px-20 py-6 text-lg md:ext-2xl font-bold home-button rounded-[2rem] hover:drop-shadow-xl hover:text-black/90">
            Reach out to us!
          </a>
        </div>


        <div className="flex-1 h-screen bg-customGreen">
          {/* Content for second div */}
          Test2
        </div>

        <div className="flex-1 h-screen bg-customBlue">
          {/* Content for third div */}
          Test3
        </div>
      </div>
    </RootLayout>
  )
}
