"use client";
import Image from 'next/image'


export default function Header() {
    return (
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
    )
}
