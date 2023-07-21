import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import ButtonTheme from "./ButtonTheme";

export default function Header() {
  return (
    <>
      <nav>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-primary">
            Novin
          </span>
          <ButtonTheme />
        </div>
      </nav>
      <div className="mb-[84px] flex flex-col items-center text-primary">
        <div className="flex justify-center items-center mb-4 w-[100px] h-[100px] rounded-full">
          <BiCodeAlt size={80} s />
        </div>
        <div className="flex justify-center items-center gap-2">
          <h1 className="font-bold text-xl ">Novin Ardian Yulianto</h1>
          <MdVerified size={28} />
        </div>
      </div>
    </>
  );
}
