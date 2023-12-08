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
        <div className="flex flex-col h-max py-1 lg:pb-3.5 lg:pt-8 lg:px-20 bg-customOrange">
          <h4 className="text-white text-7xl text-center font-['Brush_Script_MT']" >Magazine Archive</h4>
          <div className='mt-10'>
            <Slider />
          </div>
        </div>
        <SplitScreenComponent title="Issue 9 Submissions by Jan 20" isLeft={false} imageSrc="/assets/bg2.webp">
          <button className='bg-[#ECE5DD] p-4 font-bold'>
            <span className='text-black block'>Submit through</span>
            <a className='text-[#B22F04] break-normal' href="mailto:lam7a-mag@andrew.cmu.edu" target="_blank" rel="noreferrer">lam7a-mag@andrew.cmu.edu</a>
          </button>
        </SplitScreenComponent>
        <Gallery />
        <FullWidthImage src="/assets/fullcut.jpg" />
        <Footer />
      </div>
    </RootLayout>
  )
}
