import Link from "next/link";
import React, { useState } from "react";

export default function AdminPage() {
  const buttonStyle =
    "mx-2 border-8 p-6 hover:bg-slate-200 hover:cursor-pointer";

  return (
    <div className="z-10 flex flex-col justify-center items-center m-auto w-full h-full text-center min-h-screen bg-[#EAB58B] ">
      <div className="text-white lg:text-8xl text-4xl font-bold mb-4 drop-shadow-xl">
        <p className="mb-4"> Admin dashboard </p>
        <div className="flex justify-center items-center bg-slate-400 p-4">
          <Link href="/admin/upload">
            <button className={buttonStyle}> Upload </button>{" "}
          </Link>
          <Link href="/admin/delete">
            <button className={buttonStyle}> Delete </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
