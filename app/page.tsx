"use client";
import RootLayout from './layout'
import Slider from './components/slider';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer_new';
import SplitScreenComponent from './components/SplitScreenComponent';
import Gallery from './components/Gallery';
import FullWidthImage from './components/FullWidthImage';

export default function Page() {
  return (
    <RootLayout>
      <div className="relative">
        <Sidebar />
        <Header />
        <div className="flex flex-col h-max py-1 px-5 lg:pb-3.5 pt-8 lg:pt-8 lg:px-20 bg-customOrange">
          <h4 className="md:ml-6 text-white text-4xl md:text-7xl font-bold" >Magazine Archive</h4>
          <div className='mt-10'>
            <Slider />
          </div>
        </div>
        <SplitScreenComponent title="Get October Issue in print in Jan 2024" isLeft={true} imageSrc="/assets/otheroct8.png">
          <button className='bg-[#ECE5DD] p-4 font-bold'>
            <a className='text-[#B22F04] break-normal' href="/magazine/Oct23.pdf">Check It Online Now</a>
          </button>
        </SplitScreenComponent>
        <SplitScreenComponent title="Issue 9 Submissions by Jan 20" isLeft={false} imageSrc="/assets/bg2.webp">
          <button className='bg-[#ECE5DD] p-4 font-bold'>
            <span className='text-black block'>Submit through</span>
            <a className='text-[#B22F04] break-normal' href="mailto:lam7a-mag@andrew.cmu.edu" target="_blank" rel="noreferrer">lam7a-mag@andrew.cmu.edu</a>
          </button>
        </SplitScreenComponent>
        <Gallery pb-5 />
        <FullWidthImage src="/assets/fullcut.jpg" />
        <Footer />
      </div>
    </RootLayout>
  )
}
