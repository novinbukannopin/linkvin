import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { MdVerified } from "react-icons/md";

export default function Header() {
  return (
    <div className="mb-[84px] flex flex-col items-center">
      <div className="flex justify-center items-center mb-4 w-[100px] h-[100px] rounded-full">
        <BiCodeAlt size={80} s />
      </div>
      <div className="flex justify-center items-center gap-2">
        <h1 className="font-bold text-xl text-secondary">
          Novin Ardian Yulianto
        </h1>
        <MdVerified size={28} />
      </div>
    </div>
  );
}
