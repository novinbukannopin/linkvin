import React from "react";
import Link from "next/link";
import { AiFillAccountBook } from "react-icons/ai";
import CustomIcon from "../utils/CustomIcon";

export default function Blog({ icon, title, createdAt, content }) {
  return (
    <Link
      href="/"
      className="bg-[#fffffe] px-[12px] py-[14px] min-w-[290px] max-h-[250px]  rounded-md border-0 shadow-lg flex-col items-center gap-4 hover:text-sky-400 transition"
    >
      <div className="flex items-center mb-5 gap-2">
        <CustomIcon media={"instagram"} />
        <div className="">
          <h2 className="text-black text-lg font-semibold ">{title}</h2>
          <h5 className="text-black text-sm">{createdAt}</h5>
        </div>
      </div>
      <p className="text-black line-clamp-5 px-[10px]">{content}</p>
    </Link>
  );
}
