import React from "react";
import Image from "next/image";
import Modal from "./modal";

function Header() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url(/bg.jpg)" }}
    >
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] mb-4 lg:-mt-36"
        src="/lam7a-logo.webp"
        alt="Lam7a logo - CMU-Qatar Student Magazine"
        width={948}
        height={380}
        priority
      />
      <h1 className="text-white home-main-text p-2 md:text-2xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] lg:text-3xl mb-4 mt-6">
        A magazine for the students, by the students
      </h1>
      <Modal />
    </div>
  );
}

export default Header;
