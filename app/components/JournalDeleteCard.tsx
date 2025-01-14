"use client";

import React from "react";
import { IconCross } from "@/app/components/crossCircle";
import Image from "next/image";

const JournalDeleteCard = ({ journal, onDelete }: any) => {
  return (
    <div
      key={journal.name}
      className="relative hover:-translate-y-6 hover:cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        onDelete(journal);
      }}
    >
      <div className="absolute right-0 top-0">
        <IconCross />
      </div>
      <Image
        src={journal.imageurl}
        width={200}
        height={400}
        className=""
        alt={`${journal.name} Cover`}
      />
    </div>
  );
};

export default JournalDeleteCard;
