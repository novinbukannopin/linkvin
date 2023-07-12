import React from "react";
import Link from "next/link";

import * as Icon from "react-icons/ai";
import { Colors } from "../constant/Colors";

const SetupIcons = (media) => {
  const primary = Colors.primary;
  if (media === "instagram") {
    return <Icon.AiFillInstagram color={primary} size={48} />;
  } else if (media === "github") {
    return <Icon.AiFillGithub color={primary} size={48} />;
  } else if (media === "linkedin") {
    return <Icon.AiFillLinkedin color={primary} size={48} />;
  }
};

export default function Linked({ icon, title, link }) {
  return (
    <Link
      href={link}
      className="bg-white px-[12px] py-[14px] rounded-md border-0 shadow-lg flex items-center gap-4 hover:bg-[#fffff2] hover:text-sky-400 transition"
    >
      <div className="">{SetupIcons(icon)}</div>
      <h2 className="text-black text-lg ">{title}</h2>
    </Link>
  );
}
